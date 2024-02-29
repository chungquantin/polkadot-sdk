// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Substrate
use sp_core::{sr25519, storage::Storage};
use frame_support::parameter_types;

// Cumulus
use emulated_integration_tests_common::{
	accounts, build_genesis_storage, collators, SAFE_XCM_VERSION,
	RESERVABLE_ASSET_ID, PenpalSiblingSovereigAccount, PenpalTeleportableAssetLocation,
	get_account_id_from_seed
};
use parachains_common::{AccountId, Balance};

pub const PARA_ID: u32 = 1000;
pub const ED: Balance = testnet_parachains_constants::westend::currency::EXISTENTIAL_DEPOSIT;

parameter_types! {
	pub AssetHubWestendAssetOwner: AccountId = get_account_id_from_seed::<sr25519::Public>("Alice");
}

pub fn genesis() -> Storage {
	let genesis_config = asset_hub_westend_runtime::RuntimeGenesisConfig {
		system: asset_hub_westend_runtime::SystemConfig::default(),
		balances: asset_hub_westend_runtime::BalancesConfig {
			balances: accounts::init_balances().iter().cloned().map(|k| (k, ED * 4096)).collect(),
		},
		parachain_info: asset_hub_westend_runtime::ParachainInfoConfig {
			parachain_id: PARA_ID.into(),
			..Default::default()
		},
		collator_selection: asset_hub_westend_runtime::CollatorSelectionConfig {
			invulnerables: collators::invulnerables().iter().cloned().map(|(acc, _)| acc).collect(),
			candidacy_bond: ED * 16,
			..Default::default()
		},
		session: asset_hub_westend_runtime::SessionConfig {
			keys: collators::invulnerables()
				.into_iter()
				.map(|(acc, aura)| {
					(
						acc.clone(),                                     // account id
						acc,                                             // validator id
						asset_hub_westend_runtime::SessionKeys { aura }, // session keys
					)
				})
				.collect(),
		},
		polkadot_xcm: asset_hub_westend_runtime::PolkadotXcmConfig {
			safe_xcm_version: Some(SAFE_XCM_VERSION),
			..Default::default()
		},
		assets: asset_hub_westend_runtime::AssetsConfig {
			assets: vec![
				(RESERVABLE_ASSET_ID, AssetHubWestendAssetOwner::get(), true, ED),
			],
			.. Default::default()
		},
		foreign_assets: asset_hub_westend_runtime::ForeignAssetsConfig {
			assets: vec![
					// Penpal's teleportable asset representation
					(PenpalTeleportableAssetLocation::get(), PenpalSiblingSovereigAccount::get(), true, ED),
				],
			..Default::default()
		},
		..Default::default()
	};

	build_genesis_storage(
		&genesis_config,
		asset_hub_westend_runtime::WASM_BINARY
			.expect("WASM binary was not built, please build it!"),
	)
}

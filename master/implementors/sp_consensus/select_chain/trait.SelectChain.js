(function() {var implementors = {
"cumulus_test_client":[],
"node_testing":[],
"polkadot_service":[["impl&lt;B&gt; <a class=\"trait\" href=\"polkadot_service/trait.SelectChain.html\" title=\"trait polkadot_service::SelectChain\">SelectChain</a>&lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Header.html\" title=\"struct polkadot_service::generic::Header\">Header</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"polkadot_service/struct.BlakeTwo256.html\" title=\"struct polkadot_service::BlakeTwo256\">BlakeTwo256</a>&gt;, <a class=\"struct\" href=\"sp_runtime/struct.OpaqueExtrinsic.html\" title=\"struct sp_runtime::OpaqueExtrinsic\">OpaqueExtrinsic</a>&gt;&gt; for <a class=\"struct\" href=\"polkadot_service/struct.SelectRelayChain.html\" title=\"struct polkadot_service::SelectRelayChain\">SelectRelayChain</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"polkadot_service/trait.Backend.html\" title=\"trait polkadot_service::Backend\">Backend</a>&lt;<a class=\"type\" href=\"polkadot_service/type.Block.html\" title=\"type polkadot_service::Block\">Block</a>&gt; + 'static,</span>"]],
"polkadot_test_client":[],
"sc_consensus":[["impl&lt;B, Block&gt; <a class=\"trait\" href=\"sp_consensus/select_chain/trait.SelectChain.html\" title=\"trait sp_consensus::select_chain::SelectChain\">SelectChain</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_consensus/struct.LongestChain.html\" title=\"struct sc_consensus::LongestChain\">LongestChain</a>&lt;B, Block&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,</span>"]],
"substrate_test_runtime_client":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
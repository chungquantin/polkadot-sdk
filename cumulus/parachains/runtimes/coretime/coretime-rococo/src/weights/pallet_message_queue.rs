#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::Weight};
use sp_std::marker::PhantomData;

pub struct WeightInfo<T>(PhantomData<T>);
impl<T: frame_system::Config> pallet_message_queue::WeightInfo for WeightInfo<T> {
    fn ready_ring_knit() -> Weight {
        todo!()
    }

    fn ready_ring_unknit() -> Weight {
        todo!()
    }

    fn service_queue_base() -> Weight {
        todo!()
    }

    fn service_page_base_completion() -> Weight {
        todo!()
    }

    fn service_page_base_no_completion() -> Weight {
        todo!()
    }

    fn service_page_item() -> Weight {
        todo!()
    }

    fn bump_service_head() -> Weight {
        todo!()
    }

    fn reap_page() -> Weight {
        todo!()
    }

    fn execute_overweight_page_removed() -> Weight {
        todo!()
    }

    fn execute_overweight_page_updated() -> Weight {
        todo!()
    }
}
(function() {var implementors = {
"assets_common":[["impl&lt;IsForeign: ContainsPair&lt;L, L&gt;, AccountOf: ConvertLocation&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Origin&gt; + OriginTrait + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; EnsureOriginWithArg&lt;RuntimeOrigin, L&gt; for <a class=\"struct\" href=\"assets_common/foreign_creators/struct.ForeignCreators.html\" title=\"struct assets_common::foreign_creators::ForeignCreators\">ForeignCreators</a>&lt;IsForeign, AccountOf, AccountId, L&gt;<span class=\"where fmt-newline\">where\n    RuntimeOrigin::PalletsOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Origin&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;Origin, Error = RuntimeOrigin::PalletsOrigin&gt;,</span>"]],
"frame":[],
"frame_support":[],
"frame_system":[["impl&lt;O, Success, T&gt; EnsureOriginWithArg&lt;O, T&gt; for <a class=\"struct\" href=\"frame_system/struct.EnsureNever.html\" title=\"struct frame_system::EnsureNever\">EnsureNever</a>&lt;Success&gt;"],["impl&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"frame_system/enum.RawOrigin.html\" title=\"enum frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;, O&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"frame_system/enum.RawOrigin.html\" title=\"enum frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;&gt;, AccountId, T&gt; EnsureOriginWithArg&lt;O, T&gt; for <a class=\"struct\" href=\"frame_system/struct.EnsureNone.html\" title=\"struct frame_system::EnsureNone\">EnsureNone</a>&lt;AccountId&gt;"],["impl&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"frame_system/enum.RawOrigin.html\" title=\"enum frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;, O&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"frame_system/enum.RawOrigin.html\" title=\"enum frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;&gt;, AccountId: Decode, T&gt; EnsureOriginWithArg&lt;O, T&gt; for <a class=\"struct\" href=\"frame_system/struct.EnsureRoot.html\" title=\"struct frame_system::EnsureRoot\">EnsureRoot</a>&lt;AccountId&gt;"],["impl&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"frame_system/enum.RawOrigin.html\" title=\"enum frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;, O&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"frame_system/enum.RawOrigin.html\" title=\"enum frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;&gt;, AccountId: Decode, Success: TypedGet, T&gt; EnsureOriginWithArg&lt;O, T&gt; for <a class=\"struct\" href=\"frame_system/struct.EnsureRootWithSuccess.html\" title=\"struct frame_system::EnsureRootWithSuccess\">EnsureRootWithSuccess</a>&lt;AccountId, Success&gt;"],["impl&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"frame_system/enum.RawOrigin.html\" title=\"enum frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;, O&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"frame_system/enum.RawOrigin.html\" title=\"enum frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;&gt;, AccountId: Decode, T&gt; EnsureOriginWithArg&lt;O, T&gt; for <a class=\"struct\" href=\"frame_system/struct.EnsureSigned.html\" title=\"struct frame_system::EnsureSigned\">EnsureSigned</a>&lt;AccountId&gt;"],["impl&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"frame_system/enum.RawOrigin.html\" title=\"enum frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;, O&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"frame_system/enum.RawOrigin.html\" title=\"enum frame_system::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;&gt;, Who: SortedMembers&lt;AccountId&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + Decode, T&gt; EnsureOriginWithArg&lt;O, T&gt; for <a class=\"struct\" href=\"frame_system/struct.EnsureSignedBy.html\" title=\"struct frame_system::EnsureSignedBy\">EnsureSignedBy</a>&lt;Who, AccountId&gt;"]],
"pallet_collective":[["impl&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"pallet_collective/enum.RawOrigin.html\" title=\"enum pallet_collective::RawOrigin\">RawOrigin</a>&lt;AccountId, I&gt;, O&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pallet_collective/enum.RawOrigin.html\" title=\"enum pallet_collective::RawOrigin\">RawOrigin</a>&lt;AccountId, I&gt;&gt;, I: 'static, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, AccountId, T&gt; EnsureOriginWithArg&lt;O, T&gt; for <a class=\"struct\" href=\"pallet_collective/struct.EnsureProportionMoreThan.html\" title=\"struct pallet_collective::EnsureProportionMoreThan\">EnsureProportionMoreThan</a>&lt;AccountId, I, N, D&gt;"],["impl&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"pallet_collective/enum.RawOrigin.html\" title=\"enum pallet_collective::RawOrigin\">RawOrigin</a>&lt;AccountId, I&gt;, O&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pallet_collective/enum.RawOrigin.html\" title=\"enum pallet_collective::RawOrigin\">RawOrigin</a>&lt;AccountId, I&gt;&gt;, I: 'static, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, const D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, AccountId, T&gt; EnsureOriginWithArg&lt;O, T&gt; for <a class=\"struct\" href=\"pallet_collective/struct.EnsureProportionAtLeast.html\" title=\"struct pallet_collective::EnsureProportionAtLeast\">EnsureProportionAtLeast</a>&lt;AccountId, I, N, D&gt;"],["impl&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"pallet_collective/enum.RawOrigin.html\" title=\"enum pallet_collective::RawOrigin\">RawOrigin</a>&lt;AccountId, I&gt;, O&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pallet_collective/enum.RawOrigin.html\" title=\"enum pallet_collective::RawOrigin\">RawOrigin</a>&lt;AccountId, I&gt;&gt;, I: 'static, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, AccountId, T&gt; EnsureOriginWithArg&lt;O, T&gt; for <a class=\"struct\" href=\"pallet_collective/struct.EnsureMembers.html\" title=\"struct pallet_collective::EnsureMembers\">EnsureMembers</a>&lt;AccountId, I, N&gt;"],["impl&lt;O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"pallet_collective/enum.RawOrigin.html\" title=\"enum pallet_collective::RawOrigin\">RawOrigin</a>&lt;AccountId, I&gt;, O&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pallet_collective/enum.RawOrigin.html\" title=\"enum pallet_collective::RawOrigin\">RawOrigin</a>&lt;AccountId, I&gt;&gt;, I: 'static, AccountId: Decode, T&gt; EnsureOriginWithArg&lt;O, T&gt; for <a class=\"struct\" href=\"pallet_collective/struct.EnsureMember.html\" title=\"struct pallet_collective::EnsureMember\">EnsureMember</a>&lt;AccountId, I&gt;"]],
"pallet_core_fellowship":[["impl&lt;T: <a class=\"trait\" href=\"pallet_core_fellowship/pallet/trait.Config.html\" title=\"trait pallet_core_fellowship::pallet::Config\">Config</a>&lt;I&gt;, I: 'static, const MIN_RANK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u16.html\">u16</a>, A&gt; EnsureOriginWithArg&lt;&lt;T as Config&gt;::RuntimeOrigin, A&gt; for <a class=\"struct\" href=\"pallet_core_fellowship/struct.EnsureInducted.html\" title=\"struct pallet_core_fellowship::EnsureInducted\">EnsureInducted</a>&lt;T, I, MIN_RANK&gt;"]],
"pallet_ranked_collective":[["impl&lt;T: <a class=\"trait\" href=\"pallet_ranked_collective/pallet/trait.Config.html\" title=\"trait pallet_ranked_collective::pallet::Config\">Config</a>&lt;I&gt;, I: 'static, const MIN_RANK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u16.html\">u16</a>, A&gt; EnsureOriginWithArg&lt;&lt;T as Config&gt;::RuntimeOrigin, A&gt; for <a class=\"struct\" href=\"pallet_ranked_collective/struct.EnsureRankedMember.html\" title=\"struct pallet_ranked_collective::EnsureRankedMember\">EnsureRankedMember</a>&lt;T, I, MIN_RANK&gt;"],["impl&lt;T: <a class=\"trait\" href=\"pallet_ranked_collective/pallet/trait.Config.html\" title=\"trait pallet_ranked_collective::pallet::Config\">Config</a>&lt;I&gt;, I: 'static&gt; EnsureOriginWithArg&lt;&lt;T as Config&gt;::RuntimeOrigin, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u16.html\">u16</a>&gt; for <a class=\"struct\" href=\"pallet_ranked_collective/struct.EnsureOfRank.html\" title=\"struct pallet_ranked_collective::EnsureOfRank\">EnsureOfRank</a>&lt;T, I&gt;"],["impl&lt;T: <a class=\"trait\" href=\"pallet_ranked_collective/pallet/trait.Config.html\" title=\"trait pallet_ranked_collective::pallet::Config\">Config</a>&lt;I&gt;, I: 'static, const MIN_RANK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u16.html\">u16</a>, A&gt; EnsureOriginWithArg&lt;&lt;T as Config&gt;::RuntimeOrigin, A&gt; for <a class=\"struct\" href=\"pallet_ranked_collective/struct.EnsureMember.html\" title=\"struct pallet_ranked_collective::EnsureMember\">EnsureMember</a>&lt;T, I, MIN_RANK&gt;"],["impl&lt;T: <a class=\"trait\" href=\"pallet_ranked_collective/pallet/trait.Config.html\" title=\"trait pallet_ranked_collective::pallet::Config\">Config</a>&lt;I&gt;, I: 'static, const MIN_RANK: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u16.html\">u16</a>, A&gt; EnsureOriginWithArg&lt;&lt;T as Config&gt;::RuntimeOrigin, A&gt; for <a class=\"struct\" href=\"pallet_ranked_collective/struct.EnsureRanked.html\" title=\"struct pallet_ranked_collective::EnsureRanked\">EnsureRanked</a>&lt;T, I, MIN_RANK&gt;"]],
"pallet_society":[["impl&lt;T: <a class=\"trait\" href=\"pallet_society/pallet/trait.Config.html\" title=\"trait pallet_society::pallet::Config\">Config</a>, A&gt; EnsureOriginWithArg&lt;&lt;T as Config&gt;::RuntimeOrigin, A&gt; for <a class=\"struct\" href=\"pallet_society/struct.EnsureFounder.html\" title=\"struct pallet_society::EnsureFounder\">EnsureFounder</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
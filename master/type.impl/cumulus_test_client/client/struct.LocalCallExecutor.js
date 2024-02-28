(function() {var type_impls = {
"cumulus_test_client":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#44-47\">source</a><a href=\"#impl-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, B, E&gt; <a class=\"struct\" href=\"cumulus_test_client/client/struct.LocalCallExecutor.html\" title=\"struct cumulus_test_client::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;<span class=\"where fmt-newline\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,\n    E: <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a> + <a class=\"trait\" href=\"cumulus_test_client/sc_executor/trait.RuntimeVersionOf.html\" title=\"trait cumulus_test_client::sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#50-55\">source</a><h4 class=\"code-header\">pub fn <a href=\"cumulus_test_client/client/struct.LocalCallExecutor.html#tymethod.new\" class=\"fn\">new</a>(\n    backend: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;B&gt;,\n    executor: E,\n    client_config: <a class=\"struct\" href=\"cumulus_test_client/client/struct.ClientConfig.html\" title=\"struct cumulus_test_client::client::ClientConfig\">ClientConfig</a>&lt;Block&gt;,\n    execution_extensions: <a class=\"struct\" href=\"cumulus_test_client/struct.ExecutionExtensions.html\" title=\"struct cumulus_test_client::ExecutionExtensions\">ExecutionExtensions</a>&lt;Block&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"cumulus_test_client/client/struct.LocalCallExecutor.html\" title=\"struct cumulus_test_client::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Creates new instance of local call executor.</p>\n</div></details></div></details>",0,"cumulus_test_client::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#133-135\">source</a><a href=\"#impl-Clone-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, B, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"cumulus_test_client/client/struct.LocalCallExecutor.html\" title=\"struct cumulus_test_client::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;<span class=\"where fmt-newline\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#137\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cumulus_test_client/client/struct.LocalCallExecutor.html\" title=\"struct cumulus_test_client::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","cumulus_test_client::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RuntimeVersionOf-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#299-302\">source</a><a href=\"#impl-RuntimeVersionOf-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, E, Block&gt; <a class=\"trait\" href=\"cumulus_test_client/sc_executor/trait.RuntimeVersionOf.html\" title=\"trait cumulus_test_client::sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a> for <a class=\"struct\" href=\"cumulus_test_client/client/struct.LocalCallExecutor.html\" title=\"struct cumulus_test_client::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;<span class=\"where fmt-newline\">where\n    E: <a class=\"trait\" href=\"cumulus_test_client/sc_executor/trait.RuntimeVersionOf.html\" title=\"trait cumulus_test_client::sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a>,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.runtime_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#304-308\">source</a><a href=\"#method.runtime_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cumulus_test_client/sc_executor/trait.RuntimeVersionOf.html#tymethod.runtime_version\" class=\"fn\">runtime_version</a>(\n    &amp;self,\n    ext: &amp;mut dyn <a class=\"trait\" href=\"cumulus_test_client/sc_executor/trait.Externalities.html\" title=\"trait cumulus_test_client::sc_executor::Externalities\">Externalities</a>,\n    runtime_code: &amp;<a class=\"struct\" href=\"sp_core/traits/struct.RuntimeCode.html\" title=\"struct sp_core::traits::RuntimeCode\">RuntimeCode</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"cumulus_test_client/sc_executor/struct.RuntimeVersion.html\" title=\"struct cumulus_test_client::sc_executor::RuntimeVersion\">RuntimeVersion</a>, <a class=\"enum\" href=\"cumulus_test_client/sc_executor/error/enum.Error.html\" title=\"enum cumulus_test_client::sc_executor::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Extract <a href=\"cumulus_test_client/sc_executor/struct.RuntimeVersion.html\" title=\"struct cumulus_test_client::sc_executor::RuntimeVersion\"><code>RuntimeVersion</code></a> of the given <code>runtime_code</code>.</div></details></div></details>","RuntimeVersionOf","cumulus_test_client::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CallExecutor%3CBlock%3E-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#148-152\">source</a><a href=\"#impl-CallExecutor%3CBlock%3E-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, E, Block&gt; <a class=\"trait\" href=\"sc_client_api/call_executor/trait.CallExecutor.html\" title=\"trait sc_client_api::call_executor::CallExecutor\">CallExecutor</a>&lt;Block&gt; for <a class=\"struct\" href=\"cumulus_test_client/client/struct.LocalCallExecutor.html\" title=\"struct cumulus_test_client::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    E: <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a> + <a class=\"trait\" href=\"cumulus_test_client/sc_executor/trait.RuntimeVersionOf.html\" title=\"trait cumulus_test_client::sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = &lt;E as <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a>&gt;::<a class=\"associatedtype\" href=\"sp_core/traits/trait.CodeExecutor.html#associatedtype.Error\" title=\"type sp_core::traits::CodeExecutor::Error\">Error</a></h4></section></summary><div class='docblock'>Externalities error type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Backend\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Backend\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#associatedtype.Backend\" class=\"associatedtype\">Backend</a> = B</h4></section></summary><div class='docblock'>The backend used by the node.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.execution_extensions\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#158\">source</a><a href=\"#method.execution_extensions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.execution_extensions\" class=\"fn\">execution_extensions</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"cumulus_test_client/struct.ExecutionExtensions.html\" title=\"struct cumulus_test_client::ExecutionExtensions\">ExecutionExtensions</a>&lt;Block&gt;</h4></section></summary><div class='docblock'>Returns the <a href=\"cumulus_test_client/struct.ExecutionExtensions.html\" title=\"struct cumulus_test_client::ExecutionExtensions\"><code>ExecutionExtensions</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.call\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#162-168\">source</a><a href=\"#method.call\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.call\" class=\"fn\">call</a>(\n    &amp;self,\n    at_hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    method: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    call_data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>],\n    context: <a class=\"enum\" href=\"sp_core/traits/enum.CallContext.html\" title=\"enum sp_core::traits::CallContext\">CallContext</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Execute a call to a contract on top of state in a block of given hash. <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.call\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.contextual_call\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#197-206\">source</a><a href=\"#method.contextual_call\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.contextual_call\" class=\"fn\">contextual_call</a>(\n    &amp;self,\n    at_hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    method: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    call_data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>],\n    changes: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/cell/struct.RefCell.html\" title=\"struct core::cell::RefCell\">RefCell</a>&lt;<a class=\"struct\" href=\"sp_state_machine/overlayed_changes/struct.OverlayedChanges.html\" title=\"struct sp_state_machine::overlayed_changes::OverlayedChanges\">OverlayedChanges</a>&lt;&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Hashing\" title=\"type sp_runtime::traits::Header::Hashing\">Hashing</a>&gt;&gt;,\n    recorder: &amp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_trie/recorder/struct.Recorder.html\" title=\"struct sp_trie::recorder::Recorder\">Recorder</a>&lt;&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Header.html\" title=\"trait sp_runtime::traits::Header\">Header</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Header.html#associatedtype.Hashing\" title=\"type sp_runtime::traits::Header::Hashing\">Hashing</a>&gt;&gt;,\n    call_context: <a class=\"enum\" href=\"sp_core/traits/enum.CallContext.html\" title=\"enum sp_core::traits::CallContext\">CallContext</a>,\n    extensions: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/cell/struct.RefCell.html\" title=\"struct core::cell::RefCell\">RefCell</a>&lt;<a class=\"struct\" href=\"sp_externalities/extensions/struct.Extensions.html\" title=\"struct sp_externalities::extensions::Extensions\">Extensions</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Execute a contextual call on top of state in a block of a given hash. <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.contextual_call\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.runtime_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#260\">source</a><a href=\"#method.runtime_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.runtime_version\" class=\"fn\">runtime_version</a>(\n    &amp;self,\n    at_hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"cumulus_test_client/sc_executor/struct.RuntimeVersion.html\" title=\"struct cumulus_test_client::sc_executor::RuntimeVersion\">RuntimeVersion</a>, <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Extract RuntimeVersion of given block <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.runtime_version\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prove_execution\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#269-274\">source</a><a href=\"#method.prove_execution\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.prove_execution\" class=\"fn\">prove_execution</a>(\n    &amp;self,\n    at_hash: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>,\n    method: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    call_data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"struct\" href=\"sp_trie/storage_proof/struct.StorageProof.html\" title=\"struct sp_trie::storage_proof::StorageProof\">StorageProof</a>), <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Prove the execution of the given <code>method</code>. <a href=\"sc_client_api/call_executor/trait.CallExecutor.html#tymethod.prove_execution\">Read more</a></div></details></div></details>","CallExecutor<Block>","cumulus_test_client::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GetNativeVersion-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#324-328\">source</a><a href=\"#impl-GetNativeVersion-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, B, E&gt; <a class=\"trait\" href=\"sp_version/trait.GetNativeVersion.html\" title=\"trait sp_version::GetNativeVersion\">GetNativeVersion</a> for <a class=\"struct\" href=\"cumulus_test_client/client/struct.LocalCallExecutor.html\" title=\"struct cumulus_test_client::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    E: <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a> + <a class=\"trait\" href=\"sp_version/trait.GetNativeVersion.html\" title=\"trait sp_version::GetNativeVersion\">GetNativeVersion</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.native_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#330\">source</a><a href=\"#method.native_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_version/trait.GetNativeVersion.html#tymethod.native_version\" class=\"fn\">native_version</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"cumulus_test_client/sc_executor/struct.NativeVersion.html\" title=\"struct cumulus_test_client::sc_executor::NativeVersion\">NativeVersion</a></h4></section></summary><div class='docblock'>Returns the version of the native runtime.</div></details></div></details>","GetNativeVersion","cumulus_test_client::Executor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GetRuntimeVersionAt%3CBlock%3E-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#313-317\">source</a><a href=\"#impl-GetRuntimeVersionAt%3CBlock%3E-for-LocalCallExecutor%3CBlock,+B,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, B, E&gt; <a class=\"trait\" href=\"sp_version/trait.GetRuntimeVersionAt.html\" title=\"trait sp_version::GetRuntimeVersionAt\">GetRuntimeVersionAt</a>&lt;Block&gt; for <a class=\"struct\" href=\"cumulus_test_client/client/struct.LocalCallExecutor.html\" title=\"struct cumulus_test_client::client::LocalCallExecutor\">LocalCallExecutor</a>&lt;Block, B, E&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    E: <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a> + <a class=\"trait\" href=\"cumulus_test_client/sc_executor/trait.RuntimeVersionOf.html\" title=\"trait cumulus_test_client::sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.runtime_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_service/client/call_executor.rs.html#319\">source</a><a href=\"#method.runtime_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_version/trait.GetRuntimeVersionAt.html#tymethod.runtime_version\" class=\"fn\">runtime_version</a>(\n    &amp;self,\n    at: &lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"cumulus_test_client/sc_executor/struct.RuntimeVersion.html\" title=\"struct cumulus_test_client::sc_executor::RuntimeVersion\">RuntimeVersion</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Returns the version of runtime at the given block.</div></details></div></details>","GetRuntimeVersionAt<Block>","cumulus_test_client::Executor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()
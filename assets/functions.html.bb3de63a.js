import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.eda87d9d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">functions</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u5C5E\u6027\u540D\u79F0\u7684\u6570\u7EC4\uFF0C\u51FD\u6570\u5C5E\u6027\u540D\u79F0\u6765\u81EA object \u5BF9\u8C61\u81EA\u8EAB\u53EF\u679A\u4E3E\u5C5E\u6027\u3002</p><p><strong><em>\u6DFB\u52A0\u7248\u672C</em></strong></p><p>0.1.0</p><p><strong><em>\u53C2\u6570</em></strong></p><p>object (Object): \u8981\u68C0\u67E5\u7684\u5BF9\u8C61\u3002 <strong><em>\u8FD4\u56DE</em></strong></p><p>(Array): \u8FD4\u56DE\u51FD\u6570\u540D\u3002</p><p><strong><em>\u4F8B\u5B50</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">constant</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">constant</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>c <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">constant</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n_<span class="token punctuation">.</span><span class="token function">functions</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [&#39;a&#39;, &#39;b&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>\u6E90\u7801\u5B9E\u73B0</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">functions</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> object <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token function">baseFunctions</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> <span class="token function">keys</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> functions<span class="token punctuation">;</span>\n\n<span class="token comment">//</span>\n<span class="token keyword">function</span> <span class="token function">baseFunctions</span><span class="token punctuation">(</span><span class="token parameter">object<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">arrayFilter</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>object<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> baseFunctions<span class="token punctuation">;</span>\n<span class="token comment">//</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//\u6CA1\u5B8C\u6210\uFF0C\u5360\u4E2A\u5751</p>', 12);
const _hoisted_13 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_13);
}
var functions_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "functions.html.vue"]]);
export { functions_html as default };
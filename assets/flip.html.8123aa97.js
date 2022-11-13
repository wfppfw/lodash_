import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.eda87d9d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u8C03\u7528 func \u65F6\u5019\u63A5\u6536\u7FFB\u8F6C\u7684\u53C2\u6570\u3002</p><p><strong><em>\u6DFB\u52A0\u7248\u672C</em></strong></p><p>4.0.0</p><p><strong><em>\u53C2\u6570</em></strong></p><p>func (Function): \u8981\u7FFB\u8F6C\u53C2\u6570\u7684\u51FD\u6570\u3002 <strong><em>\u8FD4\u56DE</em></strong></p><p>(Function): \u8FD4\u56DE\u65B0\u7684\u51FD\u6570\u3002</p><p><strong><em>\u4F8B\u5B50</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> flipped <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> _<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">flipped</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [&#39;d&#39;, &#39;c&#39;, &#39;b&#39;, &#39;a&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>\u6E90\u7801\u5B9E\u73B0</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">flip</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">createWrap</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> <span class="token constant">WRAP_FLIP_FLAG</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> flip<span class="token punctuation">;</span>\n<span class="token comment">//createWrap\u6E90\u7801\u592A\u957F\u4E86\uFF0C\u540E\u7EED\u8865\u4E0A</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>\u7B80\u5355\u6A21\u62DF\u5B9E\u73B0</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">flip</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">resver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 13);
const _hoisted_14 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_14);
}
var flip_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "flip.html.vue"]]);
export { flip_html as default };

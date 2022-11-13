import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.eda87d9d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">constant</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521B\u5EFA\u4E00\u4E2A\u8FD4\u56DE value \u7684\u51FD\u6570\u3002</p><p><strong><em>\u6DFB\u52A0\u7248\u672C</em></strong></p><p>2.4.0</p><p><strong><em>\u53C2\u6570</em></strong></p><p>value (*): \u8981\u65B0\u51FD\u6570\u8FD4\u56DE\u7684\u503C\u3002 <strong><em>\u8FD4\u56DE</em></strong></p><p>(Function): \u8FD4\u56DE\u65B0\u7684\u5E38\u91CF\u51FD\u6570\u3002</p><p><strong><em>\u4F8B\u5B50</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> objects <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">times</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> _<span class="token punctuation">.</span><span class="token function">constant</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objects<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; [{ &#39;a&#39;: 1 }, { &#39;a&#39;: 1 }]</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objects<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> objects<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>\u6E90\u7801\u5B9E\u73B0</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">constant</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>\u7B80\u5355\u6A21\u62DF\u5B9E\u73B0</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u989D\uFF0C\u6E90\u7801\u633A\u7B80\u6D01\u7684\u54C8\uFF0C\u76F4\u63A5\u6284</span>\n<span class="token keyword">function</span> <span class="token function">constant</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> value<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 13);
const _hoisted_14 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_14);
}
var constant_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "constant.html.vue"]]);
export { constant_html as default };

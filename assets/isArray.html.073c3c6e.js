import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.eda87d9d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u68C0\u67E5 value \u662F\u5426\u662F Array \u7C7B\u5BF9\u8C61\u3002</p><p><strong><em>\u6DFB\u52A0\u7248\u672C</em></strong></p><p>0.1.0</p><p><strong><em>\u53C2\u6570</em></strong></p><p>value (*): \u8981\u68C0\u67E5\u7684\u503C\u3002</p><p><strong><em>\u8FD4\u56DE</em></strong></p><p>(boolean): \u5982\u679C value \u662F\u4E00\u4E2A\u6570\u7EC4\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002</p><p><strong><em>\u4F8B\u5B50</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; true</span>\n\n_<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; false</span>\n\n_<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; false</span>\n\n_<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span>noop<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>\u6E90\u7801\u5B9E\u73B0</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> isArray <span class="token operator">=</span> Array<span class="token punctuation">.</span>isArray<span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> isArray<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>\u7B80\u5355\u6A21\u62DF\u5B9E\u73B0</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isArray</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//\u5224\u65AD\u662F\u5426\u4E3A\u6570\u7EC4\uFF0C</span>\n  <span class="token comment">// a.constructor.toString().indexOf(&quot;Array&quot;) !== -1;</span>\n  <span class="token comment">// Object.prototype.toString.call(a).indexOf(&quot;Array&quot;)</span>\n  <span class="token keyword">return</span> array <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 14);
const _hoisted_15 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_15);
}
var isArray_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "isArray.html.vue"]]);
export { isArray_html as default };
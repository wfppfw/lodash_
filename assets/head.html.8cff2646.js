import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.eda87d9d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u6570\u7EC4 array \u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002</p><p><strong><em>\u5F15\u5165\u7248\u672C</em></strong> 0.1.0</p><p><strong><em>\u522B\u540D</em></strong> _.first</p><p><strong><em>\u53C2\u6570</em></strong> array (Array): \u8981\u67E5\u8BE2\u7684\u6570\u7EC4\u3002 <strong><em>\u8FD4\u56DE\u503C</em></strong> (*): \u8FD4\u56DE\u6570\u7EC4 array \u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002</p><p><strong><em>\u4F8B\u5B50</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; 1</span>\n\n_<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// =&gt; undefined</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>\u6E90\u7801\u5B9E\u73B0</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">head</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> array <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">.</span>length <span class="token operator">?</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> head<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><em>\u7B80\u5355\u6A21\u62DF\u5B9E\u73B0</em></strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u8FD4\u56DE\u6570\u7EC4\u7B2C\u4E00\u4E2A</span>\n<span class="token keyword">function</span> <span class="token function">head</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">?</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 11);
const _hoisted_12 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_12);
}
var head_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "head.html.vue"]]);
export { head_html as default };
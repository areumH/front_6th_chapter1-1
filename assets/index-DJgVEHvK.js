(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=`/front_6th_chapter1-1`,a=(e=window.location.pathname)=>e.startsWith(i)?e.slice(21)||`/`:e,o=e=>e>0?`<span
        class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
        >${e}</span
      >`:``,s=({type:e=`home`,cartCount:t})=>{let n=()=>e===`home`?`<h1 class="text-xl font-bold text-gray-900">
          <a href="${a()}" data-link="">쇼핑몰</a>
        </h1>`:`<div class="flex items-center space-x-3">
          <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
        </div>`;return` <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        ${n()}
        <div class="flex items-center space-x-2">
          <!-- 장바구니 아이콘 -->
          <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
              ></path>
            </svg>
            ${o(t)}
          </button>
        </div>
      </div>
    </div>
  </header>`},c=(e={},t=``,n=``,r)=>{let i=()=>{let e=`<button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">
      전체
    </button>`;return t&&(e+=`<span class="text-xs text-gray-500">&gt;</span
        ><button
          data-breadcrumb="category1"
          data-category1="${t}"
          class="text-xs hover:text-blue-800 hover:underline"
        >
          ${t}
        </button>`),n&&(e+=`<span class="text-xs text-gray-500">&gt;</span
        ><span class="text-xs text-gray-600 cursor-default">${n}</span>`),e},a=()=>{if(r)return`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`;if(t){let r=Object.keys(e[t]);return r.map(e=>`<button
        data-category1="${t}"
        data-category2="${e}"
        class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${e===n?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}"
      >
        ${e}
      </button>`).join(``)}else{let t=Object.keys(e);return t.map(e=>`<button
              data-category1="${e}"
              class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                   bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              ${e}
            </button>`).join(``)}};return`
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <label class="text-sm text-gray-600">카테고리:</label>
        ${i()}
      </div>
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2">${a()}</div>
      </div>
    </div>
  `},l=[{value:`price_asc`,label:`가격 낮은순`},{value:`price_desc`,label:`가격 높은순`},{value:`name_asc`,label:`이름순`},{value:`name_desc`,label:`이름 역순`}],u=e=>`
    <div class="flex items-center gap-2">
      <label class="text-sm text-gray-600">정렬:</label>
      <select
        id="sort-select"
        class="text-sm border border-gray-300 rounded px-2 py-1
                             focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      >
        ${l.map(t=>`
                  <option value="${t.value}" ${e===t.value&&`selected`}>
                    ${t.label}
                  </option>
                `).join(``)}
      </select>
    </div>
  `,d=e=>`
    <div class="mb-4">
      <div class="relative">
        <input
          type="text"
          id="search-input"
          placeholder="상품명을 검색해보세요..."
          value="${e}"
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  `,ee=[{value:`10`,label:`10개`},{value:`20`,label:`20개`},{value:`50`,label:`50개`},{value:`100`,label:`100개`}],f=e=>`
    <div class="flex items-center gap-2">
      <label class="text-sm text-gray-600">개수:</label>
      <select
        id="limit-select"
        class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      >
        ${ee.map(t=>`
                  <option value="${t.value}" ${e===t.value?`selected`:``}>
                    ${t.label}
                  </option>
                `).join(``)}
      </select>
    </div>
  `,p=({search:e=``,categories:t={},category1:n=``,category2:r=``,isLoading:i=!1,limit:a=`20`,sort:o=`price_asc`})=>` <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
    <!-- 검색창 -->
    ${d(e)}
    <!-- 필터 옵션 -->
    <div class="space-y-3">
      <!-- 카테고리 필터 -->
      ${c(t,n,r,i)}
      <!-- 기존 필터들 -->
      <div class="flex gap-2 items-center justify-between">
        <!-- 페이지당 상품 수 -->
        ${f(a)}
        <!-- 정렬 -->
        ${u(o)}
      </div>
    </div>
  </div>`,m=e=>{history.pushState(null,``,e),window.dispatchEvent(new PopStateEvent(`popstate`))},h=`cartItems`,g=()=>{try{let e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch(e){return console.error(e),[]}};let _=g(),v=[];function y(){localStorage.setItem(h,JSON.stringify(_)),v.forEach(e=>e(_))}const b={getState:()=>_,setState:e=>{_=[...e],y()},subscribe:e=>(v.push(e),e(_),()=>{v=v.filter(t=>t!==e)})},x={addItem:e=>{let t=b.getState(),n=t.find(t=>t.productId===e.productId),r;r=n?t.map(t=>t.productId===e.productId?{...t,quantity:t.quantity+e.quantity}:t):[...t,{...e}],b.setState(r)},deleteItem:e=>{let t=b.getState(),n=t.filter(t=>t.productId!==e);b.setState(n)},updateQuantity:(e,t)=>{let n=b.getState(),r=n.map(n=>{if(n.productId===e){let e=Math.min(Math.max(1,t),n.stock);return{...n,quantity:e}}return n});b.setState(r)},clearItem:()=>{b.setState([])},subscribe:e=>b.subscribe(e),getState:()=>b.getState()};function S(){let e=x.getState();return e.length}const C=e=>`<div
    class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
    data-product-id="${e.productId}"
  >
    <!-- 상품 이미지 -->
    <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
      <img
        src="${e.image}"
        alt="${e.title}"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        loading="lazy"
      />
    </div>
    <!-- 상품 정보 -->
    <div class="p-3">
      <div class="cursor-pointer product-info mb-3">
        <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${e.title}</h3>
        <p class="text-xs text-gray-500 mb-2">${e.brand}</p>
        <p class="text-lg font-bold text-gray-900">${Number(e.lprice).toLocaleString()}원</p>
      </div>
      <!-- 장바구니 버튼 -->
      <button
        class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                         hover:bg-blue-700 transition-colors add-to-cart-btn"
        data-product-id="85067212996"
      >
        장바구니 담기
      </button>
    </div>
  </div>`;document.addEventListener(`click`,e=>{let t=e.target.closest(`.add-to-cart-btn`);if(t){let e=t.closest(`.product-card`);if(!e)return;let n=e.dataset.productId,r=e.querySelector(`img`)?.src,i=e.querySelector(`h3`)?.textContent,a=e.querySelector(`.text-lg.font-bold.text-gray-900`)?.textContent,o={productId:n,title:i,image:r,lprice:a,quantity:1};x.addItem(o);return}let n=e.target.closest(`.product-card`);if(n){let e=n.dataset.productId;m(`${Q}product/${e}`)}});const w=()=>`<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
    <div class="aspect-square bg-gray-200"></div>
    <div class="p-3">
      <div class="h-4 bg-gray-200 rounded mb-2"></div>
      <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
      <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
      <div class="h-8 bg-gray-200 rounded"></div>
    </div>
  </div>`,te=({products:e=[],isLoading:t=!1,total:n=0,hasNext:r=!1})=>{function i(){return t&&e.length===0?Array.from({length:4}).map(()=>w()).join(``):e.map(e=>C(e)).join(``)}function a(e){return e?`<div class="text-center py-4 text-sm text-gray-500">상품을 불러오는 중...</div>`:`<div class="text-center py-4 text-sm text-gray-500">모든 상품을 확인했습니다</div>`}return` <div class="mb-6">
    <div>
      <!-- 상품 개수 정보 -->
      <div class="mb-4 text-sm text-gray-600">총 <span class="font-medium text-gray-900">${n}개</span>의 상품</div>
      <!-- 상품 그리드 -->
      <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">${i()}</div>
      ${a(r)}
    </div>
  </div>`},T=()=>`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `,E=e=>{document.body.querySelector(`#root`).innerHTML=e};function D(e){let t={...e},n=new Set;function r(e){return n.add(e),e(t),()=>n.delete(e)}function i(){return t}function a(e){t={...t,...e},n.forEach(e=>e(t))}return{subscribe:r,getState:i,setState:a}}function O({resetPage:e=!1}={}){let t=new URLSearchParams(location.search);return{page:e?1:parseInt(t.get(`page`)),search:t.get(`search`)||``,sort:t.get(`sort`)||`price_asc`,limit:parseInt(t.get(`limit`))||`20`,category1:t.get(`category1`)||``,category2:t.get(`category2`)||``}}async function k(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function A(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function j(){let e=await fetch(`/api/categories`);return await e.json()}function M(e,t){return(e.sort!==t.sort||e.search!==t.search||e.category1!==t.category1||e.category2!==t.category2||e.limit!==t.limit)&&!t.isLoading}function N(e){let t=new URLSearchParams;e.search&&t.set(`search`,e.search),e.sort&&e.sort!==`price_asc`&&t.set(`sort`,e.sort),e.limit&&e.limit!==`20`&&t.set(`limit`,e.limit),e.category1&&t.set(`category1`,e.category1),e.category2&&t.set(`category2`,e.category2),e.page&&e.page!==1&&t.set(`page`,e.page);let n=t.toString(),r=n?`${location.pathname}?${n}`:`${location.pathname}`;history.replaceState(null,``,r)}let P={products:[],categories:{},total:0,isLoading:!1,isCategoryLoading:!1,search:``,category1:``,category2:``,limit:`20`,sort:`price_asc`,page:1,hasNext:!0},F={isLoading:!1,product:{},category1:``,category2:``,relatedProducts:[]},I=null,L={...P};function R(e,t){E(`
    <div class="bg-gray-50">
      ${s({type:`home`,cartCount:t})}
      <main class="max-w-md mx-auto px-4 py-4">
        ${p({search:e.search,categories:e.categories,category1:e.category1,category2:e.category2,isLoading:e.isCategoryLoading,limit:e.limit,sort:e.sort})}
        ${te({isLoading:e.isLoading,products:e.products,total:e.total,hasNext:e.hasNext})}
      </main>
      ${T()}
    </div>
  `),H()}async function z({isInit:e=!1}={}){let t=e?O({resetPage:e}):I.getState();I.setState({...e?t:{},isLoading:!0,isCategoryLoading:e});try{let[n,r]=await Promise.all([e?j():Promise.resolve(I.getState().categories),k({page:t.page,limit:parseInt(t.limit),search:t.search,category1:t.category1,category2:t.category2,sort:t.sort})]);I.setState({...e?{categories:n}:{},products:r.products,total:r.pagination.total,isLoading:!1,isCategoryLoading:!1})}catch(e){console.error(e),I.setState({isLoading:!1,isCategoryLoading:!1})}}async function B(){let e=I.getState();if(e.loading||!e.hasNext)return;let t=e.products,n=e.page+1;I.setState({isLoading:!0});try{let r=await k({page:n,limit:parseInt(e.limit),search:e.search,category1:e.category1,category2:e.category2,sort:e.sort});I.setState({products:[...t,...r.products],total:r.pagination.total,isLoading:!1,page:n,hasNext:n*parseInt(e.limit)<r.pagination.total}),N(e)}catch(e){console.error(e),I.setState({isLoading:!1})}}function V(e){I||(I=D(P),I.subscribe(t=>{a()===`/`&&R(t,e)}),I.subscribe(e=>{M(L,e)&&(N(e),z()),L={...e}}),z({isInit:!0}).then(()=>{N(I.getState())}))}function H(){let e=I.getState(),t=document.querySelector(`#search-input`);t&&(t.value=e.search,t.onkeypress=e=>{e.key===`Enter`&&I.setState({search:e.target.value,page:1})});let n=document.querySelector(`#limit-select`);n&&(n.onchange=e=>{I.setState({limit:e.target.value,page:1})});let r=document.querySelector(`#sort-select`);r&&(r.onchange=e=>{I.setState({sort:e.target.value,page:1})}),document.querySelectorAll(`[data-category1]:not([data-category2])`).forEach(e=>{e.onclick=e=>{I.setState({category1:e.target.dataset.category1,category2:``,page:1})}}),document.querySelectorAll(`[data-category2]`).forEach(e=>{e.onclick=e=>{I.setState({category1:e.target.dataset.category1,category2:e.target.dataset.category2,page:1})}});let i=document.querySelector(`[data-breadcrumb='reset']`);i&&(i.onclick=()=>{m(a()),I.setState({category1:``,category2:``,search:``,page:1}),t&&(t.value=``)});let o=document.querySelector(`[data-breadcrumb='category1']`);o&&(o.onclick=e=>{I.setState({category1:e.target.dataset.category1,category2:``,page:1})}),window.addEventListener(`scroll`,()=>{let e=I.getState();e.isLoading||!e.hasNext||window.innerHeight+window.scrollY>=document.body.offsetHeight&&B()}),window.addEventListener(`popstate`,()=>{let e=O();I.setState({...e,page:parseInt(e.page)||1})})}const U=()=>`<svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    ></path>
  </svg> `,W=()=>`<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    ></path>
  </svg>`,ne=e=>{let t=Array.from({length:e}).map(()=>W()).join(``),n=Array.from({length:5-e}).map(()=>U()).join(``);return`<div class="flex items-center">${t}${n}</div>`},G=e=>`<div
    class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer"
    data-product-id="${e.productId}"
  >
    <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
      <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy" />
    </div>
    <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
    <p class="text-sm font-bold text-blue-600">${Number(e.lprice).toLocaleString()}원</p>
  </div>`;document.addEventListener(`click`,e=>{let t=e.target.closest(`.related-product-card`);if(t){let e=t.dataset.productId;m(`/product/${e}`)}});const K=({products:e=[]})=>`<div class="bg-white rounded-lg shadow-sm">
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
      <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
    </div>
    <div class="p-4">
      <div class="grid grid-cols-2 gap-3 responsive-grid">
        ${e.map(e=>G(e)).join(``)}
      </div>
    </div>
  </div>`;function q(e,t){let{isLoading:n,product:r,relatedProducts:i}=e;E(`
    <div class="min-h-screen bg-gray-50">
      ${s({type:`product`,cartCount:t})}
      ${n?`<main class="max-w-md mx-auto px-4 py-4">
        <div class="py-20 bg-gray-50 flex items-center justify-center">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600">상품 정보를 불러오는 중...</p>
          </div>
        </div>
      </main>`:`<main class="max-w-md mx-auto px-4 py-4">
        <!-- 브레드크럼 -->
        <nav class="mb-4">
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category1="${r.category1}">
              ${r.category1}
            </button>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category2="${r.category2}">
              ${r.category2}
            </button>
          </div>
        </nav>
        <!-- 상품 상세 정보 -->
        <div class="bg-white rounded-lg shadow-sm mb-6">
          <!-- 상품 이미지 -->
          <div class="p-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img src="${r.image}" alt="${r.title}" class="w-full h-full object-cover product-detail-image">
            </div>
            <!-- 상품 정보 -->
            <div>
              <p class="text-sm text-gray-600 mb-1"></p>
              <h1 class="text-xl font-bold text-gray-900 mb-3">${r.title}</h1>
              <!-- 평점 및 리뷰 -->
              <div class="flex items-center mb-3">
                ${ne(r.rating)}
                <span class="ml-2 text-sm text-gray-600">${r.rating}.0 (${r.reviewCount}개 리뷰)</span>
              </div>
              <!-- 가격 -->
              <div class="mb-4">
                <span class="text-2xl font-bold text-blue-600">${Number(r.lprice).toLocaleString()}원</span>
              </div>
              <!-- 재고 -->
              <div class="text-sm text-gray-600 mb-4">
                재고 ${r.stock}개
              </div>
              <!-- 설명 -->
              <div class="text-sm text-gray-700 leading-relaxed mb-6">
                ${r.description}
              </div>
            </div>
          </div>
          <!-- 수량 선택 및 액션 -->
          <div class="border-t border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-gray-900">수량</span>
              <div class="flex items-center">
                <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-l-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input type="number" id="quantity-input" value="1" min="1" max="${r.stock}" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                  focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-r-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- 액션 버튼 -->
            <button id="add-to-cart-btn" data-product-id="85067212996" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                 hover:bg-blue-700 transition-colors font-medium">
              장바구니 담기
            </button>
          </div>
        </div>
        <!-- 상품 목록으로 이동 -->
        <div class="mb-6">
          <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
            hover:bg-gray-200 transition-colors go-to-product-list">
            상품 목록으로 돌아가기
          </button>
        </div>
        <!-- 관련 상품 -->
        ${K({products:i})}
      </main>`}
      ${T()}
    </div>
  `),Y(r)}async function J(e,t){F.isLoading=!0,q(F);try{let n=await A(e);F.product=n;let r=await k({category1:n.category1,category2:n.category2,limit:5});F.relatedProducts=r.products.filter(t=>t.productId!==e).slice(0,4)||[],F.isLoading=!1,q(F,t)}catch(e){console.error(e)}}function Y(e){document.querySelector(`.go-to-product-list`)?.addEventListener(`click`,()=>{m(`/`)}),document.querySelectorAll(`.breadcrumb-link`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget,n=t.dataset.category1,r=t.dataset.category2;if(n)m(`/?category1=${encodeURIComponent(n)}`);else if(r){let e=t.closest(`.text-sm`),n=e.querySelector(`[data-category1]`),i=n?.dataset.category1;i&&m(`/?category1=${encodeURIComponent(i)}&category2=${encodeURIComponent(r)}`)}})});let t=document.querySelector(`#quantity-input`),n=parseInt(t?.max)||1;t&&t.addEventListener(`input`,()=>{let e=parseInt(t.value);(e<1||e>n)&&(t.value=1)});let r=document.querySelector(`#quantity-decrease`);r&&r.addEventListener(`click`,()=>{let e=parseInt(t.value)||1;e>1&&(t.value=e-1)});let i=document.querySelector(`#quantity-increase`);i&&i.addEventListener(`click`,()=>{let e=parseInt(t.value)||1;e<n&&(t.value=e+1)});let a=document.querySelector(`#add-to-cart-btn`);a&&a.addEventListener(`click`,()=>{console.log(`dd`);let n=e.productId,r=e.image,i=e.title,a=e.lprice,o={productId:n,title:i,image:r,lprice:a,quantity:parseInt(t.value)};console.log(o),x.addItem(o)})}function X(){let e=`<main class="max-w-md mx-auto px-4 py-4">
    <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1" />
          </filter>
        </defs>
        <!-- 404 Numbers -->
        <text
          x="160"
          y="85"
          font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          font-size="48"
          font-weight="600"
          fill="url(#blueGradient)"
          text-anchor="middle"
        >
          404
        </text>
        <!-- Icon decoration -->
        <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
        <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
        <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5" />
        <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5" />
        <!-- Message -->
        <text
          x="160"
          y="110"
          font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          font-size="14"
          font-weight="400"
          fill="#5f6368"
          text-anchor="middle"
        >
          페이지를 찾을 수 없습니다
        </text>
        <!-- Subtle bottom accent -->
        <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3" />
      </svg>
      <a
        href="/"
        data-link
        class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >홈으로</a
      >
    </div>
  </main>`;E(`
    <div class="bg-gray-50">${s({type:`home`,cartCount:0})} ${e} ${T()}</div>
  `)}function Z(){X()}const re=()=>`
    <div class="flex flex-col max-h-[calc(90vh-120px)]">
      <!-- 빈 장바구니 -->
      <div class="flex-1 flex items-center justify-center p-8">
        <div class="text-center">
          <div class="text-gray-400 mb-4">
            <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
              ></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
          <p class="text-gray-600">원하는 상품을 담아보세요!</p>
        </div>
      </div>
    </div>
  `,ie=()=>` <div
    class="flex items-center py-3 border-b border-gray-100 cart-item"
    data-product-id="85067212996"
  >
    <!-- 선택 체크박스 -->
    <label class="flex items-center mr-3">
      <input
        type="checkbox"
        checked=""
        class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded
                focus:ring-blue-500"
        data-product-id="85067212996"
      />
    </label>
    <!-- 상품 이미지 -->
    <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
      <img
        src="https://shopping-phinf.pstatic.net/main_8506721/85067212996.1.jpg"
        alt="PVC 투명 젤리 쇼핑백 1호 와인 답례품 구디백 비닐 손잡이 미니 간식 선물포장"
        class="w-full h-full object-cover cursor-pointer cart-item-image"
        data-product-id="85067212996"
      />
    </div>
    <!-- 상품 정보 -->
    <div class="flex-1 min-w-0">
      <h4
        class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title"
        data-product-id="85067212996"
      >
        PVC 투명 젤리 쇼핑백 1호 와인 답례품 구디백 비닐 손잡이 미니 간식 선물포장
      </h4>
      <p class="text-sm text-gray-600 mt-1">220원</p>
      <!-- 수량 조절 -->
      <div class="flex items-center mt-2">
        <button
          class="quantity-decrease-btn w-7 h-7 flex items-center justify-center
                 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
          data-product-id="85067212996"
        >
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
          </svg>
        </button>
        <input
          type="number"
          value="2"
          min="1"
          class="quantity-input w-12 h-7 text-center text-sm border-t border-b
                border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          disabled=""
          data-product-id="85067212996"
        />
        <button
          class="quantity-increase-btn w-7 h-7 flex items-center justify-center
                 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
          data-product-id="85067212996"
        >
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- 가격 및 삭제 -->
    <div class="text-right ml-3">
      <p class="text-sm font-medium text-gray-900">440원</p>
      <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="85067212996">
        삭제
      </button>
    </div>
  </div>`,ae=()=>`<div class="flex-1 overflow-y-auto">
    <div class="p-4 space-y-4">${ie()}</div>
  </div>`,oe=({count:e=0})=>{let t=0,n=()=>e===0?re():`
      <div class="flex flex-col max-h-[calc(90vh-120px)]">
        <!-- 전체 선택 섹션 -->
        <div class="p-4 border-b border-gray-200 bg-gray-50">
          <label class="flex items-center text-sm text-gray-700">
            <input
              type="checkbox"
              id="cart-modal-select-all-checkbox"
              class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
            />
            전체선택 (2개)
          </label>
        </div>

        <!-- 아이템 목록 -->
        ${ae()}
      </div>
    `,r=()=>e===0?``:` <!-- 하단 액션 -->
      <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        ${t>0?`<!-- 선택된 아이템 정보 -->
              <div class="flex justify-between items-center mb-3 text-sm">
                <span class="text-gray-600">선택한 상품 (1개)</span>
                <span class="font-medium">440원</span>
              </div>`:``}

        <!-- 총 금액 -->
        <div class="flex justify-between items-center mb-4">
          <span class="text-lg font-bold text-gray-900">총 금액</span>
          <span class="text-xl font-bold text-blue-600">670원</span>
        </div>
        <!-- 액션 버튼들 -->
        <div class="space-y-2">
          ${t>0?`<button
                id="cart-modal-remove-selected-btn"
                class="w-full bg-red-600 text-white py-2 px-4 rounded-md
          hover:bg-red-700 transition-colors text-sm"
              >
                선택한 상품 삭제 (1개)
              </button>`:``}

          <div class="flex gap-2">
            <button
              id="cart-modal-clear-cart-btn"
              class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md
                       hover:bg-gray-700 transition-colors text-sm"
            >
              전체 비우기
            </button>
            <button
              id="cart-modal-checkout-btn"
              class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md
                       hover:bg-blue-700 transition-colors text-sm"
            >
              구매하기
            </button>
          </div>
        </div>
      </div>`;return`
    <div class="fixed inset-0 z-50 overflow-y-auto cart-modal">
      <!-- 배경 오버레이 -->
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>
      <!-- 모달 컨테이너 -->
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div
          class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden"
        >
          <!-- 헤더 -->
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
              장바구니
            </h2>
            <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <!-- 컨텐츠 -->
          ${n()} ${r()}
        </div>
      </div>
    </div>
  `};function se(){let e=document.querySelector(`header`),t=document.querySelector(`.cart-modal`);e&&!t&&e.insertAdjacentHTML(`afterend`,oe({count:0}));function n(){let e=document.querySelector(`.cart-modal`);e&&e.remove()}let r=document.querySelector(`#cart-modal-close-btn`),i=document.querySelector(`.cart-modal-overlay`);r&&i&&(r.addEventListener(`click`,n),i.addEventListener(`click`,n))}function ce(){document.addEventListener(`click`,e=>{let t=e.target.closest(`#cart-icon-btn`);t&&se()})}const Q=`/front_6th_chapter1-1/`,le=()=>r(async()=>{let{worker:e}=await import(`./browser-C5kS9mQK.js`);return{worker:e}},[]).then(({worker:e})=>e.start({onUnhandledRequest:`bypass`,serviceWorker:{url:`${Q.slice(0,-1)}/mockServiceWorker.js`}}));async function $(){let e=a(),t=S();if(e===`/`)V(t);else if(e.startsWith(`/product/`)){let n=e.split(`/product/`)[1];await J(n,t)}else Z();x.subscribe(e=>{let t=document.querySelector(`#cart-icon-btn`);if(!t)return;let n=t.querySelector(`span`);n&&n.remove(),t.insertAdjacentHTML(`beforeend`,o(e.length))}),ce()}window.addEventListener(`popstate`,$),le().then($);
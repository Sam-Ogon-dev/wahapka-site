import{$ as e,C as t,H as n,J as r,L as i,M as a,O as o,P as s,R as c,S as l,V as u,c as d,g as f,gt as p,h as m,j as h,l as g,m as _,mt as v,o as y,pt as b,r as ee,s as x,u as S,w as C,x as w,y as T}from"./runtime-core.esm-bundler-lRKQOqih.js";import{a as E,t as D}from"./basecomponent-Cvt9cFkN.js";import{B as O,G as k,J as te,K as ne,P as A,R as j,w as M,z as N}from"./index-D3s6c4ud.js";import{t as P}from"./AppRichText-nGu3kRFi.js";var F={name:`minus`,meta:{tags:[`minus`,`remove`,`subtract`,`decrease`,`less`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M17 9.25C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H17Z`,fill:`currentColor`,key:`iu8x2q`}]]},I=f({name:`Minus`,inheritAttrs:!1,__name:`minus`,setup(t){let{Icon:n}=O(F);return(t,r)=>(o(),d(e(n),v(T(t.$attrs)),null,16))}}),L={name:`plus`,meta:{tags:[`plus`,`add`,`increase`,`more`,`extra`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M10 2.25C10.4142 2.25 10.75 2.58579 10.75 3V9.25H17C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H10.75V17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17V10.75H3C2.58579 10.75 2.25 10.4142 2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H9.25V3C9.25 2.58579 9.58579 2.25 10 2.25Z`,fill:`currentColor`,key:`uygcm6`}]]},R=f({name:`Plus`,inheritAttrs:!1,__name:`plus`,setup(t){let{Icon:n}=O(L);return(t,r)=>(o(),d(e(n),v(T(t.$attrs)),null,16))}}),z=E.extend({name:`panel`,style:`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        font-weight: dt('panel.title.font.weight');
        font-size: dt('panel.title.font.size');
    }

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }

    .p-panel-trigger {
        cursor: pointer;
    }
`,classes:{root:function(e){return[`p-panel p-component`,{"p-panel-toggleable":e.props.toggleable}]},header:`p-panel-header`,title:`p-panel-title`,headerActions:`p-panel-header-actions`,pcToggleButton:`p-panel-toggle-button`,contentContainer:`p-panel-content-container`,contentWrapper:`p-panel-content-wrapper`,content:`p-panel-content`,footer:`p-panel-footer`}}),B={name:`Panel`,extends:{name:`BasePanel`,extends:D,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0,iconOnly:!0}}}},style:z,provide:function(){return{$pcPanel:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`update:collapsed`,`toggle`],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(e){this.d_collapsed=e}},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit(`update:collapsed`,this.d_collapsed),this.$emit(`toggle`,{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return k({toggleable:this.toggleable})}},components:{Plus:R,Minus:I,Button:j},directives:{ripple:N}},V=[`data-p`],H=[`data-p`],U=[`id`],W=[`id`,`aria-labelledby`];function G(e,r,i,c,l,f){var _=a(`Button`);return o(),S(`div`,t({class:e.cx(`root`),"data-p":f.dataP},e.ptmi(`root`)),[x(`div`,t({class:e.cx(`header`),"data-p":f.dataP},e.ptm(`header`)),[h(e.$slots,`header`,{id:e.$id+`_header`,class:b(e.cx(`title`)),collapsed:l.d_collapsed},function(){return[e.header?(o(),S(`span`,t({key:0,id:e.$id+`_header`,class:e.cx(`title`)},e.ptm(`title`)),p(e.header),17,U)):g(``,!0)]}),x(`div`,t({class:e.cx(`headerActions`)},e.ptm(`headerActions`)),[h(e.$slots,`icons`),e.toggleable?h(e.$slots,`togglebutton`,{collapsed:l.d_collapsed,toggleCallback:function(e){return f.toggle(e)},keydownCallback:function(e){return f.onKeyDown(e)}},function(){return[m(_,t({id:e.$id+`_header`,class:e.cx(`pcToggleButton`),"aria-label":f.buttonAriaLabel,"aria-controls":e.$id+`_content`,"aria-expanded":!l.d_collapsed,unstyled:e.unstyled,onClick:r[0]||=function(e){return f.toggle(e)},onKeydown:r[1]||=function(e){return f.onKeyDown(e)}},e.toggleButtonProps,{pt:e.ptm(`pcToggleButton`)}),{default:u(function(){return[h(e.$slots,`toggleicon`,{collapsed:l.d_collapsed},function(){return[(o(),d(s(l.d_collapsed?`Plus`:`Minus`),v(T(e.ptm(`pcToggleButton`).icon)),null,16))]})]}),_:3},16,[`id`,`class`,`aria-label`,`aria-controls`,`aria-expanded`,`unstyled`,`pt`])]},void 0,0):g(``,!0)],16)],16,H),m(ne,t({name:`p-collapsible`},e.ptm(`transition`)),{default:u(function(){return[n(x(`div`,t({id:e.$id+`_content`,class:e.cx(`contentContainer`),role:`region`,"aria-labelledby":e.$id+`_header`},e.ptm(`contentContainer`)),[x(`div`,t({class:e.cx(`contentWrapper`)},e.ptm(`contentWrapper`)),[x(`div`,t({class:e.cx(`content`)},e.ptm(`content`)),[h(e.$slots,`default`)],16),e.$slots.footer?(o(),S(`div`,t({key:0,class:e.cx(`footer`)},e.ptm(`footer`)),[h(e.$slots,`footer`)],16)):g(``,!0)],16)],16,W),[[te,!l.d_collapsed]])]}),_:3},16)],16,V)}B.render=G;var K={class:`text-xs font-bold tracking-wider text-gray-700 uppercase`},q={key:0,class:`text-xs text-gray-500`},J=f({__name:`AppCollapse`,props:l({title:{},hint:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:[`update:modelValue`],setup(t){let n=c(t,`modelValue`);return(r,i)=>(o(),d(e(B),{collapsed:!n.value,toggleable:``,pt:{root:{class:`!rounded-none !border-0 !border-t !border-gray-200 !bg-transparent`},header:{class:`!cursor-pointer !px-3 !py-2`},content:{class:`!px-3 !pt-0 !pb-3`}},"onUpdate:collapsed":i[1]||=e=>n.value=!e},{header:u(()=>[x(`button`,{type:`button`,class:`flex flex-1 items-center gap-2 text-left`,onClick:i[0]||=e=>n.value=!n.value},[x(`span`,K,p(t.title),1),t.hint?(o(),S(`span`,q,p(t.hint),1)):g(``,!0)])]),default:u(()=>[h(r.$slots,`default`)]),_:3},8,[`collapsed`]))}}),Y=E.extend({name:`textarea`,style:`
    .p-textarea {
        font-weight: dt('textarea.font.weight');
        font-size: dt('textarea.font.size');
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-textarea p-component`,{"p-filled":t.$filled,"p-textarea-resizable ":n.autoResize,"p-textarea-sm p-inputfield-sm":n.size===`small`,"p-textarea-lg p-inputfield-lg":n.size===`large`,"p-invalid":t.$invalid,"p-variant-filled":t.$variant===`filled`,"p-textarea-fluid":t.$fluid}]}}}),re={name:`BaseTextarea`,extends:A,props:{autoResize:Boolean},style:Y,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function ie(e,t,n){return(t=ae(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e){var t=oe(e,`string`);return X(t)==`symbol`?t:t+``}function oe(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Z={name:`Textarea`,extends:re,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var e=this.$el.style.height,t=parseInt(e)||0,n=this.$el.scrollHeight;t&&n<t?(this.$el.style.height=`auto`,this.$el.style.height=`${this.$el.scrollHeight}px`):(!t||n>t)&&(this.$el.style.height=`${n}px`)}},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return t(this.ptmi(`root`,{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return k(ie({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant===`filled`},this.size,this.size))}}},se=[`value`,`name`,`disabled`,`aria-invalid`,`data-p`];function ce(e,n,r,i,a,s){return o(),S(`textarea`,t({class:e.cx(`root`),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.invalid||void 0,"data-p":s.dataP,onInput:n[0]||=function(){return s.onInput&&s.onInput.apply(s,arguments)}},s.attrs),null,16,se)}Z.render=ce;var le=f({__name:`AppTextarea`,props:l({inputId:{},placeholder:{},rows:{default:2}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(t){let n=c(t,`modelValue`);return(r,i)=>(o(),d(e(Z),{id:t.inputId,modelValue:n.value,"onUpdate:modelValue":i[0]||=e=>n.value=e,placeholder:t.placeholder,rows:t.rows,"auto-resize":``,fluid:``},null,8,[`id`,`modelValue`,`placeholder`,`rows`]))}}),ue=[`for`],de={key:0,class:`font-normal tracking-normal normal-case`},Q=f({__name:`NoteField`,props:l({label:{},hint:{},placeholder:{},compact:{type:Boolean},buttonLabel:{default:`Заметка`}},{modelValue:{required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(t){let n=t,a=c(t,`modelValue`),s=i(),l=r(!1),u=y(()=>n.compact&&!a.value&&!l.value);async function d(){l.value=!0,await C(),document.getElementById(s)?.focus()}return(n,r)=>(o(),S(`div`,{class:b([`flex flex-col gap-1.5`,{"print:hidden":!a.value}])},[u.value?(o(),S(`button`,{key:0,type:`button`,class:`flex items-center gap-1.5 self-start text-xs font-semibold text-accent-700 hover:underline print:hidden`,onClick:d},[r[2]||=x(`i`,{class:`pi pi-pencil text-[10px]`,"aria-hidden":`true`},null,-1),_(p(t.buttonLabel),1)])):(o(),S(ee,{key:1},[x(`label`,{for:e(s),class:`flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-gray-500 uppercase`},[r[3]||=x(`i`,{class:`pi pi-pencil text-[10px]`,"aria-hidden":`true`},null,-1),_(p(t.label)+` `,1),t.hint?(o(),S(`span`,de,`— `+p(t.hint),1)):g(``,!0)],8,ue),m(le,{modelValue:a.value,"onUpdate:modelValue":r[0]||=e=>a.value=e,"input-id":e(s),placeholder:t.placeholder,onBlur:r[1]||=e=>l.value=!1},null,8,[`modelValue`,`input-id`,`placeholder`])],64))],2))}}),fe={key:0,class:`flex flex-col gap-0.5 border-l-2 border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-700`},pe={class:`whitespace-pre-line`},$=f({__name:`OperativeNotes`,props:{noteKey:{},readonly:{type:Boolean}},setup(e){let t=e,n=w(M),r=y({get:()=>n.text(t.noteKey),set:e=>n.save(t.noteKey,e)});return(t,n)=>e.readonly&&r.value?(o(),S(`div`,fe,[n[1]||=x(`span`,{class:`flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-gray-500 uppercase`},[x(`i`,{class:`pi pi-bookmark text-[10px]`,"aria-hidden":`true`}),_(`Из датакарты `)],-1),x(`span`,pe,p(r.value),1)])):e.readonly?g(``,!0):(o(),d(Q,{key:1,modelValue:r.value,"onUpdate:modelValue":n[0]||=e=>r.value=e,label:`Заметки`,hint:`хранятся на этом устройстве`,placeholder:`Тактика, покраска, напоминания — всё, что хотите помнить об этом оперативнике`},null,8,[`modelValue`]))}}),me=[`data-term`],he={class:`flex items-start justify-between gap-3 bg-card-head px-3 py-2 text-card-head-text`},ge={class:`flex min-w-0 flex-col`},_e={class:`text-[10px] font-semibold tracking-widest uppercase opacity-70`},ve={class:`font-extrabold tracking-wide uppercase`},ye={class:`text-xs opacity-60`},be={class:`shrink-0 bg-accent-600 px-2 py-0.5 text-sm font-bold text-accent-contrast`},xe={class:`px-3 py-2.5 text-gray-800`},Se={key:0,class:`border-t border-gray-200 px-3 py-2`},Ce=f({__name:`PloyCard`,props:{ploy:{}},setup(e){return(t,n)=>(o(),S(`article`,{"data-term":e.ploy.name,class:`flex flex-col border border-gray-200 bg-surface text-sm`},[x(`header`,he,[x(`div`,ge,[x(`span`,_e,p(e.ploy.kind),1),x(`h4`,ve,p(e.ploy.nameEn),1),x(`span`,ye,p(e.ploy.name),1)]),x(`span`,be,[m(P,{text:`${e.ploy.cost} {CP|||glossary:Command points}`,inline:``},null,8,[`text`])])]),x(`div`,xe,[m(P,{text:e.ploy.text},null,8,[`text`])]),t.$slots.actions?(o(),S(`div`,Se,[h(t.$slots,`actions`)])):g(``,!0)],8,me))}});export{J as i,$ as n,Q as r,Ce as t};
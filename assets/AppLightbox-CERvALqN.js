import{A as e,B as t,C as n,E as r,H as i,M as a,N as o,O as s,P as c,R as l,S as u,T as d,V as f,Z as p,c as m,dt as h,ft as g,g as _,h as v,i as y,j as ee,l as b,mt as x,o as S,pt as te,q as C,r as w,s as T,u as E,y as D}from"./runtime-core.esm-bundler-DEJMgHrj.js";import{I as O,M as k,N as A,T as j,U as ne,_ as re,a as M,g as N,j as ie,k as ae,t as P,tt as oe,w as se,y as ce}from"./basecomponent-a6Mdyzhy.js";import{t as le}from"./classnames-CEAV8Kzl.js";import{t as ue}from"./baseeditableholder-DuaplVHo.js";import{C as de,D as fe,F as pe,H as me,I as F,L as I,O as he,T as ge,V as L,W as _e,k as ve,w as ye}from"./index-BtazKr42.js";var be=M.extend({name:`galleria`,style:`
    .p-galleria {
        overflow: hidden;
        border-style: solid;
        border-width: dt('galleria.border.width');
        border-color: dt('galleria.border.color');
        border-radius: dt('galleria.border.radius');
    }

    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }

    .p-galleria-items-container {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .p-galleria-items {
        position: relative;
        display: flex;
        height: 100%;
    }

    .p-galleria-nav-button {
        position: absolute !important;
        top: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: dt('galleria.nav.button.background');
        color: dt('galleria.nav.button.color');
        width: dt('galleria.nav.button.size');
        height: dt('galleria.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        margin: calc(-1 * calc(dt('galleria.nav.button.size')) / 2) dt('galleria.nav.button.gutter') 0 dt('galleria.nav.button.gutter');
        padding: 0;
        user-select: none;
        border: 0 none;
        cursor: pointer;
        outline-color: transparent;
    }

    .p-galleria-nav-button:not(.p-disabled):hover {
        background: dt('galleria.nav.button.hover.background');
        color: dt('galleria.nav.button.hover.color');
    }

    .p-galleria-nav-button:not(.p-disabled):focus-visible {
        box-shadow: dt('galleria.nav.button.focus.ring.shadow');
        outline: dt('galleria.nav.button.focus.ring.width') dt('galleria.nav.button.focus.ring.style') dt('galleria.nav.button.focus.ring.color');
        outline-offset: dt('galleria.nav.button.focus.ring.offset');
    }

    .p-galleria-next-icon,
    .p-galleria-prev-icon {
        font-size: dt('galleria.nav.icon.size');
        width: dt('galleria.nav.icon.size');
        height: dt('galleria.nav.icon.size');
    }

    .p-galleria-prev-button {
        border-radius: dt('galleria.nav.button.prev.border.radius');
        left: 0;
    }

    .p-galleria-next-button {
        border-radius: dt('galleria.nav.button.next.border.radius');
        right: 0;
    }

    .p-galleria-prev-button:dir(rtl) {
        left: auto;
        right: 0;
        transform: rotate(180deg);
    }

    .p-galleria-next-button:dir(rtl) {
        right: auto;
        left: 0;
        transform: rotate(180deg);
    }

    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .p-galleria-hover-navigators .p-galleria-nav-button {
        pointer-events: none;
        opacity: 0;
        transition: opacity dt('galleria.transition.duration') ease-in-out;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
        pointer-events: all;
        opacity: 1;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
        pointer-events: none;
    }

    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: dt('galleria.caption.background');
        color: dt('galleria.caption.color');
        padding: dt('galleria.caption.padding');
    }

    .p-galleria-thumbnails {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }

    .p-galleria-thumbnail-nav-button {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        margin: 0 dt('galleria.thumbnail.nav.button.gutter');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        background: transparent;
        color: dt('galleria.thumbnail.nav.button.color');
        width: dt('galleria.thumbnail.nav.button.size');
        height: dt('galleria.thumbnail.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.thumbnail.nav.button.border.radius');
    }

    .p-galleria-thumbnail-nav-button:hover {
        background: dt('galleria.thumbnail.nav.button.hover.background');
        color: dt('galleria.thumbnail.nav.button.hover.color');
    }

    .p-galleria-thumbnail-nav-button:focus-visible {
        box-shadow: dt('galleria.thumbnail.nav.button.focus.ring.shadow');
        outline: dt('galleria.thumbnail.nav.button.focus.ring.width') dt('galleria.thumbnail.nav.button.focus.ring.style') dt('galleria.thumbnail.nav.button.focus.ring.color');
        outline-offset: dt('galleria.thumbnail.nav.button.focus.ring.offset');
    }

    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
        font-size: dt('galleria.thumbnail.nav.button.icon.size');
        width: dt('galleria.thumbnail.nav.button.icon.size');
        height: dt('galleria.thumbnail.nav.button.icon.size');
    }

    .p-galleria-thumbnails-content {
        display: flex;
        flex-direction: row;
        background: dt('galleria.thumbnails.content.background');
        padding: dt('galleria.thumbnails.content.padding');
    }

    .p-galleria-thumbnails-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-galleria-thumbnail-items {
        display: flex;
    }

    .p-galleria-thumbnail-items:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.5;
    }

    .p-galleria-thumbnail {
        outline-color: transparent;
    }

    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }

    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-right .p-galleria-items-container {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-top .p-galleria-items-container {
        order: 2;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails,
    .p-galleria-thumbnails-top .p-galleria-thumbnails {
        order: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails-content,
    .p-galleria-thumbnails-right .p-galleria-thumbnails-content {
        flex-direction: column;
        flex-grow: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }

    .p-galleria-indicator-list {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('galleria.indicator.list.padding');
        gap: dt('galleria.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-galleria-indicator-button {
        display: inline-flex;
        align-items: center;
        background: dt('galleria.indicator.button.background');
        width: dt('galleria.indicator.button.width');
        height: dt('galleria.indicator.button.height');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.indicator.button.border.radius');
        margin: 0;
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
    }

    .p-galleria-indicator-button:hover {
        background: dt('galleria.indicator.button.hover.background');
    }

    .p-galleria-indicator-button:focus-visible {
        box-shadow: dt('galleria.indicator.button.focus.ring.shadow');
        outline: dt('galleria.indicator.button.focus.ring.width') dt('galleria.indicator.button.focus.ring.style') dt('galleria.indicator.button.focus.ring.color');
        outline-offset: dt('galleria.indicator.button.focus.ring.offset');
    }

    .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.indicator.button.active.background');
    }

    .p-galleria-indicators-left .p-galleria-items-container,
    .p-galleria-indicators-right .p-galleria-items-container {
        flex-direction: row;
        align-items: center;
    }

    .p-galleria-indicators-left .p-galleria-items,
    .p-galleria-indicators-top .p-galleria-items {
        order: 2;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-top .p-galleria-indicator-list {
        order: 1;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-right .p-galleria-indicator-list {
        flex-direction: column;
    }

    .p-galleria-inset-indicators .p-galleria-indicator-list {
        position: absolute;
        display: flex;
        z-index: 1;
        background: dt('galleria.inset.indicator.list.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button:hover {
        background: dt('galleria.inset.indicator.button.hover.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.active.background');
    }

    .p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }

    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-galleria-close-button {
        position: absolute !important;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: dt('galleria.close.button.gutter');
        background: dt('galleria.close.button.background');
        color: dt('galleria.close.button.color');
        width: dt('galleria.close.button.size');
        height: dt('galleria.close.button.size');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        border-radius: dt('galleria.close.button.border.radius');
        outline-color: transparent;
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
    }

    .p-galleria-close-icon {
        font-size: dt('galleria.close.button.icon.size');
        width: dt('galleria.close.button.icon.size');
        height: dt('galleria.close.button.icon.size');
    }

    .p-galleria-close-button:hover {
        background: dt('galleria.close.button.hover.background');
        color: dt('galleria.close.button.hover.color');
    }

    .p-galleria-close-button:focus-visible {
        box-shadow: dt('galleria.close.button.focus.ring.shadow');
        outline: dt('galleria.close.button.focus.ring.width') dt('galleria.close.button.focus.ring.style') dt('galleria.close.button.focus.ring.color');
        outline-offset: dt('galleria.close.button.focus.ring.offset');
    }

    .p-galleria-mask .p-galleria-nav-button {
        position: fixed;
        top: 50%;
    }

       .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }

    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }

    .p-galleria-enter-active {
        animation: p-animate-galleria-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-galleria-leave-active {
        animation: p-animate-galleria-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-galleria-enter-active .p-galleria-nav-button {
        opacity: 0;
    }

    @keyframes p-animate-galleria-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-galleria-leave {
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`,classes:{mask:`p-galleria-mask p-overlay-mask p-overlay-mask-enter-active`,root:function(e){var t=e.instance,n=t.$attrs.showThumbnails&&t.getPositionClass(`p-galleria-thumbnails`,t.$attrs.thumbnailsPosition),r=t.$attrs.showIndicators&&t.getPositionClass(`p-galleria-indicators`,t.$attrs.indicatorsPosition);return[`p-galleria p-component`,{"p-galleria-fullscreen":t.$attrs.fullScreen,"p-galleria-inset-indicators":t.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":t.$attrs.showItemNavigatorsOnHover&&!t.$attrs.fullScreen},n,r]},closeButton:`p-galleria-close-button`,closeIcon:`p-galleria-close-icon`,header:`p-galleria-header`,content:`p-galleria-content`,footer:`p-galleria-footer`,itemsContainer:`p-galleria-items-container`,items:`p-galleria-items`,prevButton:function(e){return[`p-galleria-prev-button p-galleria-nav-button`,{"p-disabled":e.instance.isNavBackwardDisabled}]},prevIcon:`p-galleria-prev-icon`,item:`p-galleria-item`,nextButton:function(e){return[`p-galleria-next-button p-galleria-nav-button`,{"p-disabled":e.instance.isNavForwardDisabled}]},nextIcon:`p-galleria-next-icon`,caption:`p-galleria-caption`,indicatorList:`p-galleria-indicator-list`,indicator:function(e){var t=e.instance,n=e.index;return[`p-galleria-indicator`,{"p-galleria-indicator-active":t.isIndicatorItemActive(n)}]},indicatorButton:`p-galleria-indicator-button`,thumbnails:`p-galleria-thumbnails`,thumbnailContent:`p-galleria-thumbnails-content`,thumbnailPrevButton:function(e){return[`p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button`,{"p-disabled":e.instance.isNavBackwardDisabled}]},thumbnailPrevIcon:`p-galleria-thumbnail-prev-icon`,thumbnailsViewport:`p-galleria-thumbnails-viewport`,thumbnailItems:`p-galleria-thumbnail-items`,thumbnailItem:function(e){var t=e.instance,n=e.index;return[`p-galleria-thumbnail-item`,{"p-galleria-thumbnail-item-current":e.activeIndex===n,"p-galleria-thumbnail-item-active":t.isItemActive(n),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===n,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===n}]},thumbnail:`p-galleria-thumbnail`,thumbnailNextButton:function(e){return[`p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button`,{"p-disabled":e.instance.isNavForwardDisabled}]},thumbnailNextIcon:`p-galleria-thumbnail-next-icon`}}),xe={name:`chevron-left`,meta:{tags:[`chevron-left`,`backward`,`previous`,`return`,`left`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M11.9697 4.46973C12.2626 4.17684 12.7374 4.17684 13.0303 4.46973C13.3232 4.76262 13.3232 5.23738 13.0303 5.53028L8.56055 10L13.0303 14.4697C13.3232 14.7626 13.3232 15.2374 13.0303 15.5303C12.7374 15.8232 12.2626 15.8232 11.9697 15.5303L6.96973 10.5303C6.67684 10.2374 6.67684 9.76262 6.96973 9.46973L11.9697 4.46973Z`,fill:`currentColor`,key:`es7c15`}]]},R=_({name:`ChevronLeft`,inheritAttrs:!1,__name:`chevron-left`,setup(e){let{Icon:t}=I(xe);return(e,n)=>(s(),m(p(t),g(D(e.$attrs)),null,16))}}),Se={name:`chevron-right`,meta:{tags:[`chevron-right`,`forward`,`next`,`right`,`proceed`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M6.96973 4.46972C7.26262 4.17683 7.73738 4.17683 8.03028 4.46972L13.0303 9.46972C13.3232 9.76262 13.3232 10.2374 13.0303 10.5303L8.03028 15.5303C7.73738 15.8232 7.26262 15.8232 6.96973 15.5303C6.67684 15.2374 6.67684 14.7626 6.96973 14.4697L11.4395 10L6.96973 5.53027C6.67684 5.23738 6.67684 4.76262 6.96973 4.46972Z`,fill:`currentColor`,key:`cn504p`}]]},z=_({name:`ChevronRight`,inheritAttrs:!1,__name:`chevron-right`,setup(e){let{Icon:t}=I(Se);return(e,n)=>(s(),m(p(t),g(D(e.$attrs)),null,16))}}),Ce={name:`chevron-up`,meta:{tags:[`chevron-up`,`up`,`increase`,`rise`,`elevate`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M9.52637 6.91797C9.82095 6.67766 10.2557 6.69513 10.5303 6.96973L15.5303 11.9697C15.8232 12.2626 15.8232 12.7374 15.5303 13.0303C15.2374 13.3232 14.7626 13.3232 14.4697 13.0303L10 8.56055L5.53028 13.0303C5.23738 13.3232 4.76262 13.3232 4.46973 13.0303C4.17684 12.7374 4.17684 12.2626 4.46973 11.9697L9.46973 6.96973L9.52637 6.91797Z`,fill:`currentColor`,key:`ygb8i5`}]]},we=_({name:`ChevronUp`,inheritAttrs:!1,__name:`chevron-up`,setup(e){let{Icon:t}=I(Ce);return(e,n)=>(s(),m(p(t),g(D(e.$attrs)),null,16))}}),Te={name:`BaseGalleria`,extends:P,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:`bottom`},verticalThumbnailViewPortHeight:{type:String,default:`300px`},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:`bottom`},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:be,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function B(e){return ke(e)||Oe(e)||De(e)||Ee()}function Ee(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,t){if(e){if(typeof e==`string`)return V(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}function Oe(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ke(e){if(Array.isArray(e))return V(e)}function V(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Ae={name:`GalleriaItem`,hostName:`Galleria`,extends:P,emits:[`start-slideshow`,`stop-slideshow`,`update:activeIndex`],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit(`start-slideshow`)},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:this.activeIndex===e}}},next:function(){var e=this.activeIndex+1,t=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit(`update:activeIndex`,t)},prev:function(){var e=this.activeIndex===0?0:this.activeIndex-1,t=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit(`update:activeIndex`,t)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},navBackward:function(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick:function(e){this.stopSlideShow(),this.$emit(`update:activeIndex`,e)},onIndicatorMouseEnter:function(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit(`update:activeIndex`,e))},onIndicatorKeyDown:function(e,t){switch(e.code){case`Enter`:case`NumpadEnter`:case`Space`:this.stopSlideShow(),this.$emit(`update:activeIndex`,t),e.preventDefault();break;case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`Tab`:this.onTabKey();break;case`ArrowDown`:case`ArrowUp`:case`PageUp`:case`PageDown`:e.preventDefault()}},onRightKey:function(){var e=B(O(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=B(O(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=B(O(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=e.findIndex(function(e){return k(e,`data-p-active`)===!0}),n=j(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=B(O(this.$refs.indicatorContent,`[data-pc-section="indicator"]`)),t=j(this.$refs.indicatorContent,`[data-pc-section="indicator"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=B(O(this.$refs.indicatorContent,`[data-pc-section="indicator"]`));n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},isIndicatorItemActive:function(e){return this.activeIndex===e},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1}},components:{ChevronLeft:R,ChevronRight:z},directives:{ripple:F}},je=[`disabled`],Me=[`id`,`aria-label`,`aria-roledescription`],Ne=[`disabled`],Pe=[`aria-label`,`aria-selected`,`aria-controls`,`onClick`,`onMouseenter`,`onKeydown`,`data-p-active`],Fe=[`tabindex`];function Ie(t,r,a,l,u,d){var f=o(`ripple`);return s(),E(`div`,n({class:t.cx(`itemsContainer`)},t.ptm(`itemsContainer`)),[T(`div`,n({class:t.cx(`items`)},t.ptm(`items`)),[a.showItemNavigators?i((s(),E(`button`,n({key:0,type:`button`,class:t.cx(`prevButton`),onClick:r[0]||=function(e){return d.navBackward(e)},disabled:d.isNavBackwardDisabled},t.ptm(`prevButton`),{"data-pc-group-section":`itemnavigator`}),[(s(),m(c(a.templates.previousitemicon||`ChevronLeft`),n({class:t.cx(`prevIcon`)},t.ptm(`prevIcon`)),null,16,[`class`]))],16,je)),[[f]]):b(``,!0),T(`div`,n({id:a.id+`_item_`+a.activeIndex,class:t.cx(`item`),role:`group`,"aria-label":d.ariaSlideNumber(a.activeIndex+1),"aria-roledescription":d.ariaSlideLabel},t.ptm(`item`)),[a.templates.item?(s(),m(c(a.templates.item),{key:0,item:d.activeItem},null,8,[`item`])):b(``,!0)],16,Me),a.showItemNavigators?i((s(),E(`button`,n({key:1,type:`button`,class:t.cx(`nextButton`),onClick:r[1]||=function(e){return d.navForward(e)},disabled:d.isNavForwardDisabled},t.ptm(`nextButton`),{"data-pc-group-section":`itemnavigator`}),[(s(),m(c(a.templates.nextitemicon||`ChevronRight`),n({class:t.cx(`nextIcon`)},t.ptm(`nextIcon`)),null,16,[`class`]))],16,Ne)),[[f]]):b(``,!0),a.templates.caption?(s(),E(`div`,n({key:2,class:t.cx(`caption`)},t.ptm(`caption`)),[a.templates.caption?(s(),m(c(a.templates.caption),{key:0,item:d.activeItem},null,8,[`item`])):b(``,!0)],16)):b(``,!0)],16),a.showIndicators?(s(),E(`ul`,n({key:0,ref:`indicatorContent`,class:t.cx(`indicatorList`)},t.ptm(`indicatorList`)),[(s(!0),E(w,null,e(a.value,function(e,r){return s(),E(`li`,n({key:`p-galleria-indicator-${r}`,class:t.cx(`indicator`,{index:r}),"aria-label":d.ariaPageLabel(r+1),"aria-selected":a.activeIndex===r,"aria-controls":a.id+`_item_`+r,onClick:function(e){return d.onIndicatorClick(r)},onMouseenter:function(e){return d.onIndicatorMouseEnter(r)},onKeydown:function(e){return d.onIndicatorKeyDown(e,r)}},{ref_for:!0},t.ptm(`indicator`,d.getIndicatorPTOptions(r)),{"data-p-active":d.isIndicatorItemActive(r)}),[a.templates.indicator?b(``,!0):(s(),E(`button`,n({key:0,type:`button`,tabindex:a.activeIndex===r?`0`:`-1`,class:t.cx(`indicatorButton`)},{ref_for:!0},t.ptm(`indicatorButton`,d.getIndicatorPTOptions(r))),null,16,Fe)),a.templates.indicator?(s(),m(c(a.templates.indicator),{key:1,index:r,activeIndex:a.activeIndex,tabindex:a.activeIndex===r?`0`:`-1`},null,8,[`index`,`activeIndex`,`tabindex`])):b(``,!0)],16,Pe)}),128))],16)):b(``,!0)],16)}Ae.render=Ie;function H(e){return Be(e)||ze(e)||Re(e)||Le()}function Le(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(e,t){if(e){if(typeof e==`string`)return U(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}function ze(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Be(e){if(Array.isArray(e))return U(e)}function U(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Ve={name:`GalleriaThumbnails`,hostName:`Galleria`,extends:P,emits:[`stop-slideshow`,`update:activeIndex`],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:`300px`},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(e,t){this.d_numVisible=e,this.d_oldNumVisible=t},activeIndex:function(e,t){this.d_activeIndex=e,this.d_oldActiveItemIndex=t}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var e=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(e=this.d_activeIndex<=this.getMedianItemIndex()?0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2==0?this.d_activeIndex*-1+this.getMedianItemIndex()+1:this.d_activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`,this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&ce(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(e){var t=this.totalShiftedItems+e;e<0&&-1*t+this.d_numVisible>this.value.length-1?t=this.d_numVisible-this.value.length:e>0&&t>0&&(t=0),this.circular&&(e<0&&this.value.length-1===this.d_activeIndex?t=0:e>0&&this.d_activeIndex===0&&(t=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute(`data-p-items-hidden`,`false`),!this.isUnstyled&&ce(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transform=this.isVertical?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`,this.$refs.itemsContainer.style.transition=`transform 500ms ease 0s`),this.totalShiftedItems=t},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit(`stop-slideshow`)},getMedianItemIndex:function(){var e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1},navBackward:function(e){this.stopSlideShow();var t=this.d_activeIndex===0?0:this.d_activeIndex-1,n=t+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!=0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:t;this.$emit(`update:activeIndex`,r),e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow();var t=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;t+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var n=this.circular&&this.value.length-1===this.d_activeIndex?0:t;this.$emit(`update:activeIndex`,n),e.cancelable&&e.preventDefault()},onItemClick:function(e){this.stopSlideShow();var t=e;if(t!==this.d_activeIndex){var n=t+this.totalShiftedItems,r=0;t<this.d_activeIndex?(r=this.d_numVisible-n-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!=0&&this.step(r)):(r=this.getMedianItemIndex()-n,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit(`update:activeIndex`,t)}},onThumbnailKeydown:function(e,t){switch((e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&(this.onItemClick(t),e.preventDefault()),e.code){case`ArrowRight`:this.onRightKey();break;case`ArrowLeft`:this.onLeftKey();break;case`Home`:this.onHomeKey(),e.preventDefault();break;case`End`:this.onEndKey(),e.preventDefault();break;case`ArrowUp`:case`ArrowDown`:e.preventDefault();break;case`Tab`:this.onTabKey()}},onRightKey:function(){var e=O(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===e.length?e.length-1:t+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=O(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,e.length-1)},onTabKey:function(){var e=H(O(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=e.findIndex(function(e){return k(e,`data-p-active`)===!0}),n=j(this.$refs.itemsContainer,`[tabindex="0"]`),r=e.findIndex(function(e){return e===n.parentElement});e[r].children[0].tabIndex=`-1`,e[t].children[0].tabIndex=`0`},findFocusedIndicatorIndex:function(){var e=H(O(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`)),t=j(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"] > [tabindex="0"]`);return e.findIndex(function(e){return e===t.parentElement})},changedFocusedIndicator:function(e,t){var n=O(this.$refs.itemsContainer,`[data-pc-section="thumbnailitem"]`);n[e].children[0].tabIndex=`-1`,n[t].children[0].tabIndex=`0`,n[t].children[0].focus()},onTransitionEnd:function(e){this.$refs.itemsContainer&&e.propertyName===`transform`&&(document.body.setAttribute(`data-p-items-hidden`,`true`),!this.isUnstyled&&N(this.$refs.itemsContainer,`p-items-hidden`),this.$refs.itemsContainer.style.transition=``)},onTouchStart:function(e){var t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove:function(e){e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var t=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)},changePageOnTouch:function(e,t){Math.abs(t)<10||(t<0?this.navForward(e):this.navBackward(e))},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var e;this.thumbnailsStyle=document.createElement(`style`),this.thumbnailsStyle.type=`text/css`,se(this.thumbnailsStyle,`nonce`,(e=this.$primevue)==null||(e=e.config)==null||(e=e.csp)==null?void 0:e.nonce),document.body.appendChild(this.thumbnailsStyle)}var t=`
                #${this.containerId} [data-pc-section="thumbnailitem"] {
                    flex: 1 0 ${100/this.d_numVisible}%
                }
            `;if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=H(this.responsiveOptions);var n=ne();this.sortedResponsiveOptions.sort(function(e,t){var r=e.breakpoint,i=t.breakpoint;return oe(r,i,-1,n)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var i=this.sortedResponsiveOptions[r];t+=`
                        @media screen and (max-width: ${i.breakpoint}) {
                            #${this.containerId} .p-galleria-thumbnail-item {
                                flex: 1 0 ${100/i.numVisible}%
                            }
                        }
                    `}}this.thumbnailsStyle.innerHTML=t},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var e=window.innerWidth,t={numVisible:this.numVisible},n=0;n<this.sortedResponsiveOptions.length;n++){var r=this.sortedResponsiveOptions[n];parseInt(r.breakpoint,10)>=e&&(t=r)}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.calculatePosition()},window.addEventListener(`resize`,this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&=(window.removeEventListener(`resize`,this.documentResizeListener),null)},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}},components:{ChevronLeft:R,ChevronRight:z,ChevronUp:we,ChevronDown:ve},directives:{ripple:F}};function W(e){"@babel/helpers - typeof";return W=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},W(e)}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?G(Object(n),!0).forEach(function(t){He(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function He(e,t,n){return(t=Ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ue(e){var t=We(e,`string`);return W(t)==`symbol`?t:t+``}function We(e,t){if(W(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(W(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Ge=[`disabled`,`aria-label`],Ke=[`data-p-active`,`aria-selected`,`aria-controls`,`onKeydown`,`data-p-galleria-thumbnail-item-current`,`data-p-galleria-thumbnail-item-active`,`data-p-galleria-thumbnail-item-start`,`data-p-galleria-thumbnail-item-end`],qe=[`tabindex`,`aria-label`,`aria-current`,`onClick`],Je=[`disabled`,`aria-label`];function Ye(t,r,a,l,u,d){var f=o(`ripple`);return s(),E(`div`,n({class:t.cx(`thumbnails`)},t.ptm(`thumbnails`)),[T(`div`,n({class:t.cx(`thumbnailContent`)},t.ptm(`thumbnailContent`)),[a.showThumbnailNavigators?i((s(),E(`button`,n({key:0,class:t.cx(`thumbnailPrevButton`),disabled:d.isNavBackwardDisabled,type:`button`,"aria-label":d.ariaPrevButtonLabel,onClick:r[0]||=function(e){return d.navBackward(e)}},K(K({},a.prevButtonProps),t.ptm(`thumbnailPrevButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(s(),m(c(a.templates.previousthumbnailicon||(a.isVertical?`ChevronUp`:`ChevronLeft`)),n({class:t.cx(`thumbnailPrevIcon`)},t.ptm(`thumbnailPrevIcon`)),null,16,[`class`]))],16,Ge)),[[f]]):b(``,!0),T(`div`,n({class:t.cx(`thumbnailsViewport`),style:{height:a.isVertical?a.contentHeight:``}},t.ptm(`thumbnailsViewport`)),[T(`div`,n({ref:`itemsContainer`,class:t.cx(`thumbnailItems`),role:`tablist`,onTransitionend:r[1]||=function(e){return d.onTransitionEnd(e)},onTouchstart:r[2]||=function(e){return d.onTouchStart(e)},onTouchmove:r[3]||=function(e){return d.onTouchMove(e)},onTouchend:r[4]||=function(e){return d.onTouchEnd(e)}},t.ptm(`thumbnailItems`)),[(s(!0),E(w,null,e(a.value,function(e,r){return s(),E(`div`,n({key:`p-galleria-thumbnail-item-${r}`,class:t.cx(`thumbnailItem`,{index:r,activeIndex:a.activeIndex}),role:`tab`,"data-p-active":a.activeIndex===r,"aria-selected":a.activeIndex===r,"aria-controls":a.containerId+`_item_`+r,onKeydown:function(e){return d.onThumbnailKeydown(e,r)}},{ref_for:!0},t.ptm(`thumbnailItem`),{"data-p-galleria-thumbnail-item-current":a.activeIndex===r?``:void 0,"data-p-galleria-thumbnail-item-active":d.isItemActive(r)?``:void 0,"data-p-galleria-thumbnail-item-start":d.firstItemAciveIndex()===r?``:void 0,"data-p-galleria-thumbnail-item-end":d.lastItemActiveIndex()===r?``:void 0}),[T(`div`,n({class:t.cx(`thumbnail`),tabindex:a.activeIndex===r?`0`:`-1`,"aria-label":d.ariaPageLabel(r+1),"aria-current":a.activeIndex===r?`page`:void 0,onClick:function(e){return d.onItemClick(r)}},{ref_for:!0},t.ptm(`thumbnail`)),[a.templates.thumbnail?(s(),m(c(a.templates.thumbnail),{key:0,item:e},null,8,[`item`])):b(``,!0)],16,qe)],16,Ke)}),128))],16)],16),a.showThumbnailNavigators?i((s(),E(`button`,n({key:1,class:t.cx(`thumbnailNextButton`),disabled:d.isNavForwardDisabled,type:`button`,"aria-label":d.ariaNextButtonLabel,onClick:r[5]||=function(e){return d.navForward(e)}},K(K({},a.nextButtonProps),t.ptm(`thumbnailNextButton`)),{"data-pc-group-section":`thumbnailnavigator`}),[(s(),m(c(a.templates.nextthumbnailicon||(a.isVertical?`ChevronDown`:`ChevronRight`)),n({class:t.cx(`thumbnailNextIcon`)},t.ptm(`thumbnailNextIcon`)),null,16,[`class`]))],16,Je)),[[f]]):b(``,!0)],16)],16)}Ve.render=Ye;function q(e){"@babel/helpers - typeof";return q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},q(e)}function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Xe(Object(n),!0).forEach(function(t){Qe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Qe(e,t,n){return(t=$e(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $e(e){var t=et(e,`string`);return q(t)==`symbol`?t:t+``}function et(e,t){if(q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var tt={name:`GalleriaContent`,hostName:`Galleria`,extends:P,inheritAttrs:!1,interval:null,emits:[`activeitem-change`,`mask-hide`],data:function(){return{activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(e){e&&e.length<this.numVisible&&(this.numVisible=e.length)},"$attrs.activeIndex":function(e){this.activeIndex=e},"$attrs.numVisible":function(e){this.numVisible=e},"$attrs.autoPlay":function(e){e?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit(`activeitem-change`,this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(e){return this.ptm(e,{props:Ze(Ze({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var e=this;this.interval=setInterval(function(){e.activeIndex=e.$attrs.circular&&e.$attrs.value.length-1===e.activeIndex?0:e.activeIndex+1},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(e,t){var n=[`top`,`left`,`bottom`,`right`].find(function(e){return e===t});return n?`${e}-${n}`:``},isVertical:function(){return this.$attrs.thumbnailsPosition===`left`||this.$attrs.thumbnailsPosition===`right`}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:Ae,GalleriaThumbnails:Ve,Times:he},directives:{ripple:F}};function J(e){"@babel/helpers - typeof";return J=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},J(e)}function nt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?nt(Object(n),!0).forEach(function(t){it(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function it(e,t,n){return(t=at(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function at(e){var t=ot(e,`string`);return J(t)==`symbol`?t:t+``}function ot(e,t){if(J(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(J(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var st=[`id`,`aria-label`,`aria-roledescription`],ct=[`aria-label`],lt=[`aria-live`];function ut(e,t,r,l,u,d){var f=a(`GalleriaItem`),p=a(`GalleriaThumbnails`),h=o(`ripple`);return e.$attrs.value&&e.$attrs.value.length>0?(s(),E(`div`,n({key:0,id:e.$id,role:`region`,class:[e.cx(`root`),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},rt(rt({},e.$attrs.containerProps),d.getPTOptions(`root`))),[e.$attrs.fullScreen?i((s(),E(`button`,n({key:0,autofocus:``,type:`button`,class:e.cx(`closeButton`),"aria-label":d.closeAriaLabel,onClick:t[0]||=function(t){return e.$emit(`mask-hide`)}},d.getPTOptions(`closeButton`)),[(s(),m(c(e.$attrs.templates.closeicon||`Times`),n({class:e.cx(`closeIcon`)},d.getPTOptions(`closeIcon`)),null,16,[`class`]))],16,ct)),[[h]]):b(``,!0),e.$attrs.templates&&e.$attrs.templates.header?(s(),E(`div`,n({key:1,class:e.cx(`header`)},d.getPTOptions(`header`)),[(s(),m(c(e.$attrs.templates.header)))],16)):b(``,!0),T(`div`,n({class:e.cx(`content`),"aria-live":e.$attrs.autoPlay?`polite`:`off`},d.getPTOptions(`content`)),[v(f,{id:e.$id,activeIndex:u.activeIndex,"onUpdate:activeIndex":t[1]||=function(e){return u.activeIndex=e},slideShowActive:u.slideShowActive,"onUpdate:slideShowActive":t[2]||=function(e){return u.slideShowActive=e},value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:d.startSlideShow,onStopSlideshow:d.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`id`,`activeIndex`,`slideShowActive`,`value`,`circular`,`templates`,`showIndicators`,`changeItemOnIndicatorHover`,`showItemNavigators`,`autoPlay`,`onStartSlideshow`,`onStopSlideshow`,`pt`,`unstyled`]),e.$attrs.showThumbnails?(s(),m(p,{key:0,activeIndex:u.activeIndex,"onUpdate:activeIndex":t[3]||=function(e){return u.activeIndex=e},slideShowActive:u.slideShowActive,"onUpdate:slideShowActive":t[4]||=function(e){return u.slideShowActive=e},containerId:e.$id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:u.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:d.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:d.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,[`activeIndex`,`slideShowActive`,`containerId`,`value`,`templates`,`numVisible`,`responsiveOptions`,`circular`,`isVertical`,`contentHeight`,`showThumbnailNavigators`,`prevButtonProps`,`nextButtonProps`,`onStopSlideshow`,`pt`,`unstyled`])):b(``,!0)],16,lt),e.$attrs.templates&&e.$attrs.templates.footer?(s(),E(`div`,n({key:2,class:e.cx(`footer`)},d.getPTOptions(`footer`)),[(s(),m(c(e.$attrs.templates.footer)))],16)):b(``,!0)],16,st)):b(``,!0)}tt.render=ut;var Y={name:`Galleria`,extends:Te,inheritAttrs:!1,emits:[`update:activeIndex`,`update:visible`],container:null,mask:null,documentKeydownListener:null,data:function(){return{containerVisible:this.visible,target:null}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&ye(),this.mask=null,this.container&&=(L.clear(this.container.$el||this.container),null)},methods:{onBeforeEnter:function(e){L.set(`modal`,e,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(e){this.target=document.activeElement,this.mask.style.zIndex=String(parseInt(e.style.zIndex,10)-1),de(),this.focus(),this.bindGlobalListeners()},onBeforeLeave:function(){!this.isUnstyled&&N(this.mask,`p-overlay-mask-leave-active`)},onLeave:function(){ie(this.target),this.target=null},onAfterLeave:function(e){L.clear(e),this.containerVisible=!1,ye(),this.unbindGlobalListeners()},onActiveItemChange:function(e){this.activeIndex!==e&&this.$emit(`update:activeIndex`,e)},maskHide:function(){this.$emit(`update:visible`,!1)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},onKeyDown:function(e){e.code===`Escape`&&this.maskHide()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(window.document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindGlobalListeners:function(){this.fullScreen&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.fullScreen&&this.unbindDocumentKeyDownListener()},focus:function(){var e=this.container.$el.querySelector(`[autofocus]`);e&&e.focus()}},components:{GalleriaContent:tt,Portal:fe},directives:{focustrap:ge}},dt=[`aria-modal`];function ft(e,t,r,c,l,u){var d=a(`GalleriaContent`),p=a(`Portal`),h=o(`focustrap`);return e.fullScreen?(s(),m(p,{key:0},{default:f(function(){return[l.containerVisible?(s(),E(`div`,n({key:0,ref:u.maskRef,class:[e.cx(`mask`),e.maskClass],role:`dialog`,"aria-modal":e.fullScreen?`true`:void 0},e.ptm(`mask`)),[v(me,n({name:`p-galleria`,onBeforeEnter:u.onBeforeEnter,onEnter:u.onEnter,onBeforeLeave:u.onBeforeLeave,onLeave:u.onLeave,onAfterLeave:u.onAfterLeave,appear:``},e.ptm(`transition`)),{default:f(function(){return[e.visible?i((s(),m(d,n({key:0,ref:u.containerRef,onMaskHide:u.maskHide,templates:e.$slots,onActiveitemChange:u.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`onMaskHide`,`templates`,`onActiveitemChange`,`pt`,`unstyled`])),[[h]]):b(``,!0)]}),_:1},16,[`onBeforeEnter`,`onEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,dt)):b(``,!0)]}),_:1})):(s(),m(d,n({key:1,templates:e.$slots,onActiveitemChange:u.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,[`templates`,`onActiveitemChange`,`pt`,`unstyled`]))}Y.render=ft;var pt=`
    .p-slider {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .p-slider-track {
        background: dt('slider.track.background');
        border-radius: dt('slider.track.border.radius');
    }

    .p-slider-handle {
        cursor: grab;
        touch-action: none;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: dt('slider.handle.height');
        width: dt('slider.handle.width');
        background: dt('slider.handle.background');
        border-radius: dt('slider.handle.border.radius');
        transition:
            background dt('slider.transition.duration'),
            color dt('slider.transition.duration'),
            border-color dt('slider.transition.duration'),
            box-shadow dt('slider.transition.duration'),
            outline-color dt('slider.transition.duration');
        outline-color: transparent;
    }

    .p-slider-handle::before {
        content: '';
        width: dt('slider.handle.content.width');
        height: dt('slider.handle.content.height');
        display: block;
        background: dt('slider.handle.content.background');
        border-radius: dt('slider.handle.content.border.radius');
        box-shadow: dt('slider.handle.content.shadow');
        transition: background dt('slider.transition.duration');
    }

    .p-slider:not(.p-disabled) .p-slider-handle:hover {
        background: dt('slider.handle.hover.background');
    }

    .p-slider:not(.p-disabled) .p-slider-handle:hover::before {
        background: dt('slider.handle.content.hover.background');
    }

    .p-slider-handle:has(.p-slider-input:focus-visible){
        box-shadow: dt('slider.handle.focus.ring.shadow');
        outline: dt('slider.handle.focus.ring.width') dt('slider.handle.focus.ring.style') dt('slider.handle.focus.ring.color');
        outline-offset: dt('slider.handle.focus.ring.offset');
    }

    .p-slider-range {
        display: block;
        background: dt('slider.range.background');
        border-radius: dt('slider.track.border.radius');
    }

    .p-slider.p-slider-horizontal {
        height: dt('slider.handle.height');
    }

    .p-slider.p-slider-horizontal .p-slider-track {
        height: dt('slider.track.size');
    }

    .p-slider-horizontal .p-slider-range {
        height: 100%;
    }

    .p-slider-vertical {
        flex-direction: column;
        width: dt('slider.handle.width');
    }
        
    .p-slider-vertical .p-slider-track {
        min-height: 100px;
        width: dt('slider.track.size');
    }

    .p-slider-vertical .p-slider-range {
        width: 100%;
    }

    .p-slider-input {
        clip-path:inset(50%);
        overflow:hidden;
        white-space:nowrap;
        border:0;
        padding:0;
        width:100%;
        height:100%;
        margin:-1px;
        position:fixed;top:0;left:0;
    }
`;function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?mt(Object(n),!0).forEach(function(t){ht(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ht(e,t,n){return(t=gt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gt(e){var t=_t(e,`string`);return X(t)==`symbol`?t:t+``}function _t(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var vt=M.extend({name:`slider`,style:pt,classes:{root:function(e){var t=e.props;return[`p-slider p-component`,{"p-disabled":t.disabled,"p-slider-horizontal":t.orientation===`horizontal`,"p-slider-vertical":t.orientation===`vertical`}]},track:`p-slider-track`,range:`p-slider-range`,handle:`p-slider-handle`,input:`p-slider-input`},inlineStyles:{root:{display:`flex`,position:`relative`,"touch-action":`none`},track:{display:`block`,"flex-grow":1,position:`relative`},range:function(e){var t=e.instance;if(t.isRange()){var n=t.values()??[0,0],r=t.getValuePercent(Math.min(n[0],n[1])),i=t.getValuePercent(Math.max(n[0],n[1])),a=Math.max(i-r,0);return t.isHorizontal()?{position:`absolute`,"inset-inline-start":r+`%`,width:a+`%`}:{position:`absolute`,bottom:r+`%`,height:a+`%`}}var o=t.getValuePercent(t.getHandleValue(0));return t.isHorizontal()?{position:`absolute`,width:o+`%`}:{position:`absolute`,bottom:`0`,height:o+`%`}},handle:function(e){var t=e.instance,n=e.index??0,r=t.getHandleValue(n),i=t.getValuePercent(r),a=t.isHandleDisabled(n)?{cursor:`default`,"pointer-events":`none`}:{};return t.isHorizontal()?Z(Z({},a),{},{position:`absolute`,"inset-inline-start":i+`%`,translate:`-50% 0`}):Z(Z({},a),{},{position:`absolute`,bottom:i+`%`,translate:`0 50%`})},startHandler:function(e){var t=e.instance,n=t.getHandleValue(0),r=t.getValuePercent(n),i=t.isHandleDisabled(0)?{cursor:`default`,"pointer-events":`none`}:{};return t.isHorizontal()?Z(Z({},i),{},{position:`absolute`,"inset-inline-start":r+`%`,translate:`-50% 0`}):Z(Z({},i),{},{position:`absolute`,bottom:r+`%`,translate:`0 50%`})},endHandler:function(e){var t=e.instance,n=t.getHandleValue(1),r=t.getValuePercent(n),i=t.isHandleDisabled(1)?{cursor:`default`,"pointer-events":`none`}:{};return t.isHorizontal()?Z(Z({},i),{},{position:`absolute`,"inset-inline-start":r+`%`,translate:`-50% 0`}):Z(Z({},i),{},{position:`absolute`,bottom:r+`%`,translate:`0 50%`})}}}),yt={name:`BaseSlider`,extends:ue,props:{min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},step:{type:Number,default:null},range:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabledMinHandle:{type:Boolean,default:!1},disabledMaxHandle:{type:Boolean,default:!1},minStepsBetweenHandles:{type:Number,default:0},inputId:{type:String,default:null},inputClass:{type:[String,Object,Array],default:null},inputStyle:{type:Object,default:null},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:vt,provide:function(){return{$pcSlider:this,$parentInstance:this}}};function Q(e){"@babel/helpers - typeof";return Q=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Q(e)}function bt(e,t,n){return(t=xt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xt(e){var t=St(e,`string`);return Q(t)==`symbol`?t:t+``}function St(e,t){if(Q(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Q(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ct(e){return Dt(e)||Et(e)||Tt(e)||wt()}function wt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tt(e,t){if(e){if(typeof e==`string`)return $(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}function Et(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Dt(e){if(Array.isArray(e))return $(e)}function $(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Ot={name:`Slider`,extends:yt,inheritAttrs:!1,emits:[`change`,`slideend`],handleIndex:null,initX:null,initY:null,barWidth:null,barHeight:null,dragListener:null,dragEndListener:null,data:function(){return{d_dragging:!1,d_focusedIndex:null}},beforeUnmount:function(){this.unbindDragListeners()},methods:{updateDomData:function(){var e=this.$el.getBoundingClientRect();this.initX=e.left+re(),this.initY=e.top+ae(),this.barWidth=this.$el.offsetWidth,this.barHeight=this.$el.offsetHeight},setValue:function(e){var t,n=e.touches?e.touches[0].pageX:e.pageX,r=e.touches?e.touches[0].pageY:e.pageY;t=this.orientation===`horizontal`?A(this.$el)?(this.initX+this.barWidth-n)*100/this.barWidth:(n-this.initX)*100/this.barWidth:(this.initY+this.barHeight-r)*100/this.barHeight;var i=(this.max-this.min)*(t/100)+this.min;this.step||(i=Math.floor(i)),this.updateModel(e,i)},clamp:function(e,t,n){return Math.min(Math.max(e,t),n)},getPrecision:function(e){var t=e.toString();if(t.includes(`e-`))return Number(t.split(`e-`)[1]||0);var n=t.indexOf(`.`);return n>=0?t.length-n-1:0},roundToStep:function(e,t,n){if(!t)return e;var r=this.getPrecision(t),i=Math.round((e-n)/t)*t+n;return Number(i.toFixed(r))},updateModel:function(e,t){var n=this.step?this.roundToStep(t,this.step,this.min):Math.round(t*100)/100,r;if(this.range){r=this.value?Ct(this.value):[];var i=Math.max((this.minStepsBetweenHandles||0)*(this.step||1),0);if(this.handleIndex==0){var a=r[1]===void 0?this.max:r[1]-i;n=this.clamp(n,this.min,a),r[0]=n}else{var o=r[0]===void 0?this.min:r[0]+i;n=this.clamp(n,o,this.max),r[1]=n}}else n=this.clamp(n,this.min,this.max),r=n;this.writeValue(r,e),this.$emit(`change`,r)},onDragStart:function(e,t){var n,r,i;if(!(this.disabled||this.readonly)&&!(this.range&&this.isHandleDisabled(t))){this.d_dragging=!0,this.updateDomData(),this.handleIndex=this.range&&this.value[0]===this.max?0:t;var a=(n=e.currentTarget)==null||(r=n.querySelector)==null?void 0:r.call(n,`.p-slider-input`);a==null||(i=a.focus)==null||i.call(a)}},onDrag:function(e){this.d_dragging&&this.setValue(e)},onDragEnd:function(e){this.d_dragging&&(this.d_dragging=!1,this.$emit(`slideend`,{originalEvent:e,value:this.value}))},onBarClick:function(e){this.disabled||this.readonly||k(e.target,`data-pc-section`)!==`handle`&&(this.updateDomData(),this.setValue(e))},onMouseDown:function(e,t){this.bindDragListeners(),this.onDragStart(e,t)},onInputChange:function(e,t){if(!(this.disabled||this.readonly)&&!(this.range&&this.isHandleDisabled(t))){this.handleIndex=t;var n=parseFloat(e.target.value);Number.isNaN(n)||(this.updateModel(e,n),this.$emit(`slideend`,{originalEvent:e,value:this.value}))}},onInputFocus:function(e,t){this.d_focusedIndex=t},onInputBlur:function(e,t){var n,r;this.d_focusedIndex===t&&(this.d_focusedIndex=null),(n=(r=this.formField).onBlur)==null||n.call(r,e),this.$emit(`slideend`,{originalEvent:e,value:this.value})},bindDragListeners:function(){this.dragListener||(this.dragListener=this.onDrag.bind(this),document.addEventListener(`mousemove`,this.dragListener)),this.dragEndListener||(this.dragEndListener=this.onDragEnd.bind(this),document.addEventListener(`mouseup`,this.dragEndListener))},unbindDragListeners:function(){this.dragListener&&=(document.removeEventListener(`mousemove`,this.dragListener),null),this.dragEndListener&&=(document.removeEventListener(`mouseup`,this.dragEndListener),null)},isRange:function(){return this.range},isHorizontal:function(){return this.orientation===`horizontal`},values:function(){return this.range?[this.d_value?.[0]??this.min,this.d_value?.[1]??this.max]:[this.d_value??this.min]},getHandleValue:function(e){return this.values()[e]??this.min},isHandleDisabled:function(e){return!!(this.disabled||this.range&&(e===0&&this.disabledMinHandle||e===1&&this.disabledMaxHandle))},getValuePercent:function(e){var t=this.max-this.min;return t?Math.min(Math.max((e-this.min)/t*100,0),100):0}},computed:{value:function(){return this.range?[this.d_value?.[0]??this.min,this.d_value?.[1]??this.max]:this.d_value??this.min},horizontal:function(){return this.orientation===`horizontal`},vertical:function(){return this.orientation===`vertical`},handlePosition:function(){return this.getValuePercent(this.getHandleValue(0))},rangeStartPosition:function(){return this.value&&this.value[0]!==void 0?this.getValuePercent(this.value[0]):0},rangeEndPosition:function(){return this.value&&this.value.length===2&&this.value[1]!==void 0?this.getValuePercent(this.value[1]):100},dataP:function(){return le(bt({},this.orientation,this.orientation))}}},kt=[`data-p`,`data-orientation`,`data-disabled`,`data-invalid`,`data-dragging`],At=[`data-orientation`,`data-disabled`,`data-invalid`,`data-dragging`],jt=[`data-p`,`data-orientation`,`data-disabled`,`data-invalid`,`data-dragging`],Mt=[`data-p`,`data-orientation`,`data-disabled`,`data-invalid`,`data-dragging`],Nt=[`id`,`name`,`min`,`max`,`step`,`value`,`disabled`,`readonly`,`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`],Pt=[`data-p`,`data-orientation`,`data-disabled`,`data-invalid`,`data-dragging`],Ft=[`id`,`name`,`min`,`max`,`step`,`value`,`disabled`,`readonly`,`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`],It=[`data-p`,`data-orientation`,`data-disabled`,`data-invalid`,`data-dragging`],Lt=[`name`,`min`,`max`,`step`,`value`,`disabled`,`readonly`,`tabindex`,`aria-valuemin`,`aria-valuenow`,`aria-valuemax`,`aria-labelledby`,`aria-label`,`aria-orientation`];function Rt(e,t,r,i,a,o){return s(),E(`div`,n({class:e.cx(`root`),style:e.sx(`root`),onClick:t[24]||=function(){return o.onBarClick&&o.onBarClick.apply(o,arguments)}},e.ptmi(`root`),{"data-p":o.dataP,"data-orientation":e.orientation,"data-disabled":e.disabled?``:void 0,"data-invalid":e.$invalid?``:void 0,"data-dragging":a.d_dragging?``:void 0}),[T(`div`,n({class:e.cx(`track`),style:e.sx(`track`)},e.ptm(`track`),{"data-orientation":e.orientation,"data-disabled":e.disabled?``:void 0,"data-invalid":e.$invalid?``:void 0,"data-dragging":a.d_dragging?``:void 0}),[T(`span`,n({class:e.cx(`range`),style:e.sx(`range`)},e.ptm(`range`),{"data-p":o.dataP,"data-orientation":e.orientation,"data-disabled":e.disabled?``:void 0,"data-invalid":e.$invalid?``:void 0,"data-dragging":a.d_dragging?``:void 0}),null,16,jt)],16,At),e.range?b(``,!0):(s(),E(`span`,n({key:0,class:e.cx(`handle`),style:e.sx(`handle`),onTouchstartPassive:t[4]||=function(e){return o.onDragStart(e)},onTouchmovePassive:t[5]||=function(e){return o.onDrag(e)},onTouchend:t[6]||=function(e){return o.onDragEnd(e)},onMousedown:t[7]||=function(e){return o.onMouseDown(e)}},e.ptm(`handle`),{"data-p":o.dataP,"data-index":0,"data-orientation":e.orientation,"data-disabled":e.disabled?``:void 0,"data-invalid":e.$invalid?``:void 0,"data-dragging":a.d_dragging?``:void 0}),[T(`input`,n({type:`range`,class:[e.cx(`input`),e.inputClass],style:e.inputStyle,id:e.inputId,name:e.name,min:e.min,max:e.max,step:e.step??1,value:o.getHandleValue(0),disabled:e.disabled,readonly:e.readonly,tabindex:e.disabled?-1:e.tabindex,"aria-valuemin":e.min,"aria-valuenow":o.getHandleValue(0),"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation,onInput:t[0]||=function(e){return o.onInputChange(e,0)},onChange:t[1]||=function(e){return o.onInputChange(e,0)},onFocus:t[2]||=function(e){return o.onInputFocus(e,0)},onBlur:t[3]||=function(e){return o.onInputBlur(e,0)}},e.ptm(`input`)),null,16,Nt)],16,Mt)),e.range?(s(),E(`span`,n({key:1,class:e.cx(`handle`),style:e.sx(`startHandler`),onTouchstartPassive:t[12]||=function(e){return o.onDragStart(e,0)},onTouchmovePassive:t[13]||=function(e){return o.onDrag(e)},onTouchend:t[14]||=function(e){return o.onDragEnd(e)},onMousedown:t[15]||=function(e){return o.onMouseDown(e,0)}},e.ptm(`startHandler`),{"data-p":o.dataP,"data-index":0,"data-orientation":e.orientation,"data-disabled":o.isHandleDisabled(0)?``:void 0,"data-invalid":e.$invalid?``:void 0,"data-dragging":a.d_dragging?``:void 0}),[T(`input`,n({type:`range`,class:[e.cx(`input`),e.inputClass],style:e.inputStyle,id:e.inputId,name:e.name,min:e.min,max:e.max,step:e.step??1,value:o.getHandleValue(0),disabled:o.isHandleDisabled(0),readonly:e.readonly,tabindex:o.isHandleDisabled(0)?-1:e.tabindex,"aria-valuemin":e.min,"aria-valuenow":o.getHandleValue(0),"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation,onInput:t[8]||=function(e){return o.onInputChange(e,0)},onChange:t[9]||=function(e){return o.onInputChange(e,0)},onFocus:t[10]||=function(e){return o.onInputFocus(e,0)},onBlur:t[11]||=function(e){return o.onInputBlur(e,0)}},e.ptm(`input`)),null,16,Ft)],16,Pt)):b(``,!0),e.range?(s(),E(`span`,n({key:2,class:e.cx(`handle`),style:e.sx(`endHandler`),onTouchstartPassive:t[20]||=function(e){return o.onDragStart(e,1)},onTouchmovePassive:t[21]||=function(e){return o.onDrag(e)},onTouchend:t[22]||=function(e){return o.onDragEnd(e)},onMousedown:t[23]||=function(e){return o.onMouseDown(e,1)}},e.ptm(`endHandler`),{"data-p":o.dataP,"data-index":1,"data-orientation":e.orientation,"data-disabled":o.isHandleDisabled(1)?``:void 0,"data-invalid":e.$invalid?``:void 0,"data-dragging":a.d_dragging?``:void 0}),[T(`input`,n({type:`range`,class:[e.cx(`input`),e.inputClass],style:e.inputStyle,name:e.name,min:e.min,max:e.max,step:e.step??1,value:o.getHandleValue(1),disabled:o.isHandleDisabled(1),readonly:e.readonly,tabindex:o.isHandleDisabled(1)?-1:e.tabindex,"aria-valuemin":e.min,"aria-valuenow":o.getHandleValue(1),"aria-valuemax":e.max,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-orientation":e.orientation,onInput:t[16]||=function(e){return o.onInputChange(e,1)},onChange:t[17]||=function(e){return o.onInputChange(e,1)},onFocus:t[18]||=function(e){return o.onInputFocus(e,1)},onBlur:t[19]||=function(e){return o.onInputBlur(e,1)}},e.ptm(`input`)),null,16,Lt)],16,It)):b(``,!0)],16,kt)}Ot.render=Rt;var zt={class:`flex w-full flex-col items-center gap-2`},Bt={key:0,class:`flex w-full max-w-sm items-center gap-3 print:hidden`},Vt=_({__name:`AppZoom`,props:{label:{},resetKey:{},max:{default:4},dark:{type:Boolean}},setup(e){let n=e,i=window.matchMedia?.(`(pointer: fine)`).matches??!0,a=C(null),o=C(1),c=C(0),l=C(0),u=S(()=>o.value>1.01),f=S(()=>n.dark?`text-lightbox-text`:`text-gray-500`),m=S({get:()=>Math.round(o.value*100),set:e=>_(e/100,g())});function g(){let e=a.value?.getBoundingClientRect();return{px:(e?.width??0)/2,py:(e?.height??0)/2}}function _(e,{px:t,py:r}){let i=Math.min(n.max,Math.max(1,e)),a=i/o.value;c.value=t-(t-c.value)*a,l.value=r-(r-l.value)*a,o.value=i,y()}function y(){let e=a.value?.getBoundingClientRect();e&&(c.value=Math.min(0,Math.max(e.width-e.width*o.value,c.value)),l.value=Math.min(0,Math.max(e.height-e.height*o.value,l.value)))}function b(){o.value=1,c.value=0,l.value=0}t(()=>n.resetKey,b);let w=new Map,D=null,O=0;function k(e){let t=a.value.getBoundingClientRect();return{px:e.clientX-t.left,py:e.clientY-t.top}}function A(){let[e,t]=[...w.values()];return Math.hypot(e.x-t.x,e.y-t.y)}function j(){let[e,t]=[...w.values()],n=a.value.getBoundingClientRect();return{px:(e.x+t.x)/2-n.left,py:(e.y+t.y)/2-n.top}}function ne(e){try{a.value?.setPointerCapture(e.pointerId)}catch{}if(w.set(e.pointerId,{x:e.clientX,y:e.clientY}),w.size===2&&(D={distance:A(),scale:o.value}),w.size===1){let t=Date.now();t-O<300?(u.value?b():_(2.5,k(e)),O=0):O=t}}function re(e){let t=w.get(e.pointerId);t&&(w.set(e.pointerId,{x:e.clientX,y:e.clientY}),w.size===2&&D?_(D.scale*A()/D.distance,j()):w.size===1&&u.value&&(c.value+=e.clientX-t.x,l.value+=e.clientY-t.y,y()))}function M(e){w.delete(e.pointerId),w.size<2&&(D=null)}function N(e){(e.ctrlKey||e.metaKey)&&(e.preventDefault(),_(o.value*Math.exp(-e.deltaY/300),k(e)))}return r(()=>a.value?.addEventListener(`wheel`,N,{passive:!1})),d(()=>a.value?.removeEventListener(`wheel`,N)),(t,n)=>(s(),E(`div`,zt,[T(`div`,{ref_key:`viewport`,ref:a,class:h([`relative w-full touch-none overflow-hidden select-none`,u.value?`cursor-grab active:cursor-grabbing`:``]),onPointerdown:ne,onPointermove:re,onPointerup:M,onPointercancel:M,onDragstart:n[0]||=_e(()=>{},[`prevent`])},[T(`div`,{class:`origin-top-left will-change-transform`,style:te({transform:`translate(${c.value}px, ${l.value}px) scale(${o.value})`})},[ee(t.$slots,`default`)],4)],34),p(i)?(s(),E(`div`,Bt,[v(p(pe),{icon:`pi pi-search-minus`,text:``,rounded:``,size:`small`,"aria-label":`${e.label}: уменьшить`,disabled:!u.value,onClick:n[1]||=e=>_(o.value-.5,g())},null,8,[`aria-label`,`disabled`]),v(p(Ot),{modelValue:m.value,"onUpdate:modelValue":n[2]||=e=>m.value=e,min:100,max:e.max*100,step:10,class:`flex-1`,"aria-label":`${e.label}: масштаб`},null,8,[`modelValue`,`max`,`aria-label`]),v(p(pe),{icon:`pi pi-search-plus`,text:``,rounded:``,size:`small`,"aria-label":`${e.label}: увеличить`,disabled:o.value>=e.max,onClick:n[3]||=e=>_(o.value+.5,g())},null,8,[`aria-label`,`disabled`]),T(`span`,{class:h([`w-12 text-right text-xs tabular-nums`,f.value])},x(m.value)+`%`,3)])):(s(),E(`p`,{key:1,class:h([`text-xs print:hidden`,f.value])},x(u.value?`Двойное касание — исходный размер`:`Разведите пальцы или коснитесь дважды, чтобы увеличить`),3))]))}}),Ht={class:`flex w-full flex-col items-center gap-2`},Ut=[`src`,`alt`],Wt={class:`text-sm text-lightbox-text`},Gt=[`src`,`alt`],Kt=_({__name:`AppLightbox`,props:u({images:{}},{visible:{type:Boolean,required:!0},visibleModifiers:{},index:{default:0},indexModifiers:{}}),emits:[`update:visible`,`update:index`],setup(e){let t=l(e,`visible`),n=l(e,`index`);return(r,i)=>(s(),E(w,null,[v(p(Y),{visible:t.value,"onUpdate:visible":i[0]||=e=>t.value=e,"active-index":n.value,"onUpdate:activeIndex":i[1]||=e=>n.value=e,value:e.images,"num-visible":6,"full-screen":``,circular:``,"show-item-navigators":``,"show-thumbnails":``,pt:{mask:{class:`app-lightbox-mask`},root:{class:`!w-[min(92vw,64rem)] !border-0 !bg-transparent`},thumbnails:{class:`!bg-transparent`}}},{item:f(({item:e})=>[T(`figure`,Ht,[v(Vt,{label:e.caption,"reset-key":n.value,dark:``},{default:f(()=>[T(`img`,{src:e.url,alt:e.caption,class:`max-h-[68vh] w-full object-contain`,draggable:`false`},null,8,Ut)]),_:2},1032,[`label`,`reset-key`]),T(`figcaption`,Wt,x(e.caption),1)])]),thumbnail:f(({item:e})=>[T(`img`,{src:e.url,alt:e.caption,class:`h-14 w-14 object-contain`},null,8,Gt)]),_:1},8,[`visible`,`active-index`,`value`]),(s(),m(y,{to:`body`},[t.value?(s(),E(`button`,{key:0,type:`button`,class:`app-lightbox-close`,"aria-label":`Закрыть просмотр`,title:`Закрыть`,onClick:i[2]||=e=>t.value=!1},[...i[3]||=[T(`i`,{class:`pi pi-times`,"aria-hidden":`true`},null,-1)]])):b(``,!0)]))],64))}});export{Vt as n,Kt as t};
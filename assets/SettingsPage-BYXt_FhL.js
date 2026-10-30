import{$ as e,A as t,C as n,O as r,R as i,S as a,c as o,g as s,gt as c,h as l,j as u,l as d,pt as f,r as p,s as m,u as h,x as g}from"./runtime-core.esm-bundler-lRKQOqih.js";import{a as _}from"./basecomponent-Cvt9cFkN.js";import{t as v}from"./baseeditableholder-BMGEvqDs.js";import{W as y,x as b}from"./index-BLM16_cS.js";import{t as x}from"./PageHeader-CBSTHySF.js";var S=_.extend({name:`toggleswitch`,style:`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-toggleswitch p-component`,{"p-toggleswitch-checked":t.checked,"p-disabled":n.disabled,"p-invalid":t.$invalid}]},input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`},inlineStyles:{root:{position:`relative`}}}),C={name:`ToggleSwitch`,extends:{name:`BaseToggleSwitch`,extends:v,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:S,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`change`,`focus`,`blur`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.checked?this.falseValue:this.trueValue;this.writeValue(t,e),this.$emit(`change`,e)}},onFocus:function(e){this.$emit(`focus`,e)},onBlur:function(e){var t,n;this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return y({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},w=[`data-p-checked`,`data-p-disabled`,`data-p`],T=[`id`,`checked`,`tabindex`,`disabled`,`readonly`,`aria-checked`,`aria-labelledby`,`aria-label`,`aria-invalid`],E=[`data-p`],D=[`data-p`];function O(e,t,i,a,o,s){return r(),h(`div`,n({class:e.cx(`root`),style:e.sx(`root`)},s.getPTOptions(`root`),{"data-p-checked":s.checked,"data-p-disabled":e.disabled,"data-p":s.dataP}),[m(`input`,n({id:e.inputId,type:`checkbox`,role:`switch`,class:[e.cx(`input`),e.inputClass],style:e.inputStyle,checked:s.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":s.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:t[0]||=function(){return s.onFocus&&s.onFocus.apply(s,arguments)},onBlur:t[1]||=function(){return s.onBlur&&s.onBlur.apply(s,arguments)},onChange:t[2]||=function(){return s.onChange&&s.onChange.apply(s,arguments)}},s.getPTOptions(`input`)),null,16,T),m(`div`,n({class:e.cx(`slider`)},s.getPTOptions(`slider`),{"data-p":s.dataP}),[m(`div`,n({class:e.cx(`handle`)},s.getPTOptions(`handle`),{"data-p":s.dataP}),[u(e.$slots,`handle`,{checked:s.checked})],16,D)],16,E)],16,w)}C.render=O;var k=s({__name:`AppSwitch`,props:a({label:{},inputId:{},disabled:{type:Boolean}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:[`update:modelValue`],setup(t){let n=i(t,`modelValue`);return(i,a)=>(r(),o(e(C),{modelValue:n.value,"onUpdate:modelValue":a[0]||=e=>n.value=e,"input-id":t.inputId,"aria-label":t.label,disabled:t.disabled},null,8,[`modelValue`,`input-id`,`aria-label`,`disabled`]))}}),A={class:`mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-8 lg:px-8`},j={class:`flex flex-col border border-gray-200 bg-surface`,"aria-label":`Оформление`},M=[`for`],N={class:`font-bold text-gray-900`},P={class:`text-sm text-gray-600`},F={key:0,class:`text-xs text-gray-500`},I=s({__name:`SettingsPage`,setup(n){let i=g(b),a=i.settings(),o=[{key:`crt`,title:`Шум монитора`,description:`Экран когитатора поверх приложения: зерно помех, строки развёртки, бегущая полоса и мерцание.`},{key:`backdrop`,title:`Фон темы`,description:`Арт фракции и узор армии за страницами. Выключен — ровный фон в цветах темы.`},{key:`parallax`,title:`Параллакс фона`,description:`Слои фона сдвигаются вслед за курсором, а без мыши медленно плавают. Выключен — фон неподвижен.`}];function s(e){return e===`parallax`&&!a.backdrop}return(n,u)=>(r(),h(`main`,A,[l(x,{title:`Настройки`,eyebrow:`Приложение`,subtitle:`Settings`}),m(`section`,j,[u[0]||=m(`h2`,{class:`border-b border-gray-200 px-4 py-3 text-xs font-bold tracking-widest text-accent-600 uppercase`},` Оформление `,-1),(r(),h(p,null,t(o,t=>m(`div`,{key:t.key,class:f([`flex items-start gap-4 border-b border-gray-200 px-4 py-4 last:border-b-0`,{"opacity-50":s(t.key)}])},[m(`label`,{for:`setting-${t.key}`,class:`flex min-w-0 flex-1 cursor-pointer flex-col gap-1`},[m(`span`,N,c(t.title),1),m(`span`,P,c(t.description),1),s(t.key)?(r(),h(`span`,F,`Включите фон темы, чтобы настроить.`)):d(``,!0)],8,M),l(k,{"input-id":`setting-${t.key}`,label:t.title,"model-value":e(a)[t.key],disabled:s(t.key),"onUpdate:modelValue":n=>e(i).set(t.key,n)},null,8,[`input-id`,`label`,`model-value`,`disabled`,`onUpdate:modelValue`])],2)),64))]),u[1]||=m(`p`,{class:`text-xs text-gray-500`},` Настройки сохраняются на этом устройстве. Если в системе включено «уменьшить движение», фон и шум не двигаются при любых настройках. `,-1)]))}});export{I as default};
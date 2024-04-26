import{r as h,a as e,u as v,c as _,b as w,d as N,e as x,j as m,L as P}from"./index-79da42ee.js";import{A as C}from"./arrow-back-d4707ebe.js";import{B as k,D as B}from"./requestApi-7763db0c.js";import{C as D,R as j,a as g}from"./Row-72e92c49.js";import{F as L}from"./Form-81b5960d.js";const R=["as","disabled"];function O(t,o){if(t==null)return{};var s={},r=Object.keys(t),n,a;for(a=0;a<r.length;a++)n=r[a],!(o.indexOf(n)>=0)&&(s[n]=t[n]);return s}function S(t){return!t||t.trim()==="#"}function y({tagName:t,disabled:o,href:s,target:r,rel:n,role:a,onClick:c,tabIndex:u=0,type:f}){t||(s!=null||r!=null||n!=null?t="a":t="button");const i={tagName:t};if(t==="button")return[{type:f||"button",disabled:o},i];const p=d=>{if((o||t==="a"&&S(s))&&d.preventDefault(),o){d.stopPropagation();return}c==null||c(d)},l=d=>{d.key===" "&&(d.preventDefault(),p(d))};return t==="a"&&(s||(s="#"),o&&(s=void 0)),[{role:a??"button",disabled:void 0,tabIndex:o?void 0:u,href:s,target:t==="a"?r:void 0,"aria-disabled":o||void 0,rel:t==="a"?n:void 0,onClick:p,onKeyDown:l},i]}const $=h.forwardRef((t,o)=>{let{as:s,disabled:r}=t,n=O(t,R);const[a,{tagName:c}]=y(Object.assign({tagName:s,disabled:r},n));return e(c,Object.assign({},n,a,{ref:o}))});$.displayName="Button";const b=h.forwardRef(({as:t,bsPrefix:o,variant:s="primary",size:r,active:n=!1,disabled:a=!1,className:c,...u},f)=>{const i=v(o,"btn"),[p,{tagName:l}]=y({tagName:t,disabled:a,...u});return e(l,{...p,...u,ref:f,disabled:a,className:_(c,i,n&&"active",s&&`${i}-${s}`,r&&`${i}-${r}`,u.href&&a&&"disabled")})});b.displayName="Button";const E=b,F=t=>{let{slug:o}=w(),{state:s}=N(),r=x();const[n,a]=h.useState(""),[c,u]=h.useState({}),f=async(i,p)=>{i.preventDefault();try{const l=await B.productLogin(o,n);l.data.message==="Success"?(sessionStorage.setItem("product_Password",n),r(`/product/${o}`,{state:l.data.data})):(alert("Wrong password entered"),sessionStorage.removeItem("product_Password")),console.log(l.data)}catch(l){console.log(l)}};return h.useEffect(()=>{(async()=>{try{s?u(s):r("/")}catch(p){console.log(p)}})()},[]),e("div",{className:"product_login",style:{background:c.bg_color},children:e(D,{children:m(j,{className:"justify-content-center",children:[m(g,{lg:"12",children:[e("div",{className:"header",children:e(P,{to:"/",children:e("img",{src:C})})}),m("div",{className:"product_desc_box",children:[e("div",{className:"product_img_box",children:e("img",{src:k.ENDPOINT_URL+"api/"+c.login_image,className:"img-fluid product_img"})}),e("div",{className:"product_description",children:m("p",{children:["To start Crocheting', type in the ",e("br",{})," password that's on the ",e("br",{})," card in your kit."]})})]})]}),e(g,{lg:"4",children:m("div",{className:"password_form",children:[e("h3",{children:"Enter Password"}),m("div",{className:"form_box",children:[e(L,{onSubmit:f,children:e("input",{type:"password",className:"form-control",value:n,onChange:i=>a(i.target.value),placeholder:"Enter Password..."})}),e(E,{onClick:f,style:{padding:0,margin:0,display:"block"},children:m("div",{className:"form_eye",children:[e("div",{className:"eye_box",children:e("span",{})}),e("div",{className:"eye_box",children:e("span",{})})]})})]})]})}),e(g,{lg:"12",children:e("p",{className:"text-white text-center",children:"Copyright © 2023 The Original Knit."})})]})})})};export{F as default};

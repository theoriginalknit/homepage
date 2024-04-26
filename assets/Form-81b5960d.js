import{g as P,r as s,a as l,c as m,u as f,j as O,F as ee}from"./index-79da42ee.js";import{a as oe}from"./Row-72e92c49.js";var S={exports:{}},te="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ae=te,re=ae;function b(){}function _(){}_.resetWarningCache=b;var se=function(){function e(a,r,n,p,i,d){if(d!==re){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function o(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:_,resetWarningCache:b};return t.PropTypes=t,t};S.exports=se();var ne=S.exports;const F=P(ne);function le(e,o){return s.Children.toArray(e).some(t=>s.isValidElement(t)&&t.type===o)}const ce={type:F.string,tooltip:F.bool,as:F.elementType},k=s.forwardRef(({as:e="div",className:o,type:t="valid",tooltip:a=!1,...r},n)=>l(e,{...r,ref:n,className:m(o,`${t}-${a?"tooltip":"feedback"}`)}));k.displayName="Feedback";k.propTypes=ce;const j=k,pe=s.createContext({}),u=pe,E=s.forwardRef(({id:e,bsPrefix:o,className:t,type:a="checkbox",isValid:r=!1,isInvalid:n=!1,as:p="input",...i},d)=>{const{controlId:c}=s.useContext(u);return o=f(o,"form-check-input"),l(p,{...i,ref:d,type:a,id:e||c,className:m(t,o,r&&"is-valid",n&&"is-invalid")})});E.displayName="FormCheckInput";const x=E,W=s.forwardRef(({bsPrefix:e,className:o,htmlFor:t,...a},r)=>{const{controlId:n}=s.useContext(u);return e=f(e,"form-check-label"),l("label",{...a,ref:r,htmlFor:t||n,className:m(o,e)})});W.displayName="FormCheckLabel";const R=W,G=s.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:t,inline:a=!1,reverse:r=!1,disabled:n=!1,isValid:p=!1,isInvalid:i=!1,feedbackTooltip:d=!1,feedback:c,feedbackType:y,className:C,style:g,title:N="",type:$="checkbox",label:v,children:T,as:J="input",...K},Q)=>{o=f(o,"form-check"),t=f(t,"form-switch");const{controlId:I}=s.useContext(u),X=s.useMemo(()=>({controlId:e||I}),[I,e]),L=!T&&v!=null&&v!==!1||le(T,R),Z=l(x,{...K,type:$==="switch"?"checkbox":$,ref:Q,isValid:p,isInvalid:i,disabled:n,as:J});return l(u.Provider,{value:X,children:l("div",{style:g,className:m(C,L&&o,a&&`${o}-inline`,r&&`${o}-reverse`,$==="switch"&&t),children:T||O(ee,{children:[Z,L&&l(R,{title:N,children:v}),c&&l(j,{type:y,tooltip:d,children:c})]})})})});G.displayName="FormCheck";const h=Object.assign(G,{Input:x,Label:R}),D=s.forwardRef(({bsPrefix:e,type:o,size:t,htmlSize:a,id:r,className:n,isValid:p=!1,isInvalid:i=!1,plaintext:d,readOnly:c,as:y="input",...C},g)=>{const{controlId:N}=s.useContext(u);return e=f(e,"form-control"),l(y,{...C,type:o,size:a,ref:g,readOnly:c,id:r||N,className:m(n,d?`${e}-plaintext`:e,t&&`${e}-${t}`,o==="color"&&`${e}-color`,p&&"is-valid",i&&"is-invalid")})});D.displayName="FormControl";const me=Object.assign(D,{Feedback:j}),V=s.forwardRef(({className:e,bsPrefix:o,as:t="div",...a},r)=>(o=f(o,"form-floating"),l(t,{ref:r,className:m(e,o),...a})));V.displayName="FormFloating";const ie=V,A=s.forwardRef(({controlId:e,as:o="div",...t},a)=>{const r=s.useMemo(()=>({controlId:e}),[e]);return l(u.Provider,{value:r,children:l(o,{...t,ref:a})})});A.displayName="FormGroup";const B=A,M=s.forwardRef(({as:e="label",bsPrefix:o,column:t=!1,visuallyHidden:a=!1,className:r,htmlFor:n,...p},i)=>{const{controlId:d}=s.useContext(u);o=f(o,"form-label");let c="col-form-label";typeof t=="string"&&(c=`${c} ${c}-${t}`);const y=m(r,o,a&&"visually-hidden",t&&c);return n=n||d,t?l(oe,{ref:i,as:"label",className:y,htmlFor:n,...p}):l(e,{ref:i,className:y,htmlFor:n,...p})});M.displayName="FormLabel";const de=M,U=s.forwardRef(({bsPrefix:e,className:o,id:t,...a},r)=>{const{controlId:n}=s.useContext(u);return e=f(e,"form-range"),l("input",{...a,type:"range",ref:r,className:m(o,e),id:t||n})});U.displayName="FormRange";const fe=U,q=s.forwardRef(({bsPrefix:e,size:o,htmlSize:t,className:a,isValid:r=!1,isInvalid:n=!1,id:p,...i},d)=>{const{controlId:c}=s.useContext(u);return e=f(e,"form-select"),l("select",{...i,size:t,ref:d,className:m(a,e,o&&`${e}-${o}`,r&&"is-valid",n&&"is-invalid"),id:p||c})});q.displayName="FormSelect";const ue=q,H=s.forwardRef(({bsPrefix:e,className:o,as:t="small",muted:a,...r},n)=>(e=f(e,"form-text"),l(t,{...r,ref:n,className:m(o,e,a&&"text-muted")})));H.displayName="FormText";const ye=H,Y=s.forwardRef((e,o)=>l(h,{...e,ref:o,type:"switch"}));Y.displayName="Switch";const Fe=Object.assign(Y,{Input:h.Input,Label:h.Label}),z=s.forwardRef(({bsPrefix:e,className:o,children:t,controlId:a,label:r,...n},p)=>(e=f(e,"form-floating"),O(B,{ref:p,className:m(o,e),controlId:a,...n,children:[t,l("label",{htmlFor:a,children:r})]})));z.displayName="FloatingLabel";const he=z,Ce={_ref:F.any,validated:F.bool,as:F.elementType},w=s.forwardRef(({className:e,validated:o,as:t="form",...a},r)=>l(t,{...a,ref:r,className:m(e,o&&"was-validated")}));w.displayName="Form";w.propTypes=Ce;const $e=Object.assign(w,{Group:B,Control:me,Floating:ie,Check:h,Switch:Fe,Label:de,Text:ye,Range:fe,Select:ue,FloatingLabel:he});export{$e as F};

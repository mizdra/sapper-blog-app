import{w as s}from"./index-Qsbhl2Kk.js";import{e as m}from"./index-BprOrAxJ.js";import{T as i}from"./Time-7Y_HPOpj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./uniq-CRcuIFBH.js";import"./_getTag-B4FxQjOn.js";import"./index-BRKM0OPm.js";import"./index-DcfKkSlL.js";import"./lifecycle-D2dAEIN_.js";import"./index-CNIsqJ_B.js";const b={title:"Time",component:i,tags:["autodocs"],argTypes:{date:{control:{type:"text"},describe:"日付"}}},t={args:{date:"2021-01-01T00:00:00.000Z"},play:({canvasElement:r})=>{const n=s(r).getByText("2021.01.01");m(n).toHaveAttribute("datetime","2021-01-01T00:00:00.000Z")}};var e,a,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    date: "2021-01-01T00:00:00.000Z"
  },
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const time = canvas.getByText("2021.01.01");
    expect(time).toHaveAttribute("datetime", "2021-01-01T00:00:00.000Z");
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,b as default};

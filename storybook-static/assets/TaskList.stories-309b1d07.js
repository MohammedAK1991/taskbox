import{j as i,a as s,T as L,D as t}from"./Task.stories-468792f0.js";import"./index-76fb7be0.js";import{P as o}from"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";function c({loading:p,tasks:g,onPinTask:E,onArchiveTask:_}){const x={onPinTask:E,onArchiveTask:_},a=i("div",{className:"loading-item",children:[s("span",{className:"glow-checkbox"}),i("span",{className:"glow-text",children:[s("span",{children:"Loading"})," ",s("span",{children:"cool"})," ",s("span",{children:"state"})]})]});if(p)return i("div",{className:"list-items","data-testid":"loading",children:[a,a,a,a,a,a]},"loading");if(g.length===0)return s("div",{className:"list-items","data-testid":"empty",children:i("div",{className:"wrapper-message",children:[s("span",{className:"icon-check"}),s("p",{className:"title-message",children:"You have no tasks"}),s("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty");const I=[...g.filter(e=>e.state==="TASK_PINNED"),...g.filter(e=>e.state!=="TASK_PINNED")];return s("div",{className:"list-items",children:I.map(e=>s(L,{task:e,...x},e.id))})}c.propTypes={loading:o.bool,tasks:o.arrayOf(L.propTypes.task).isRequired,onPinTask:o.func,onArchiveTask:o.func};c.defaultProps={loading:!1};c.__docgenInfo={description:"",methods:[],displayName:"TaskList",props:{loading:{defaultValue:{value:"false",computed:!1},description:"Checks if it's in loading state",type:{name:"bool"},required:!1},tasks:{description:"The list of tasks",type:{name:"arrayOf",value:{name:"custom",raw:"Task.propTypes.task"}},required:!0},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1}}};const j={component:c,title:"TaskList",decorators:[p=>s("div",{style:{padding:"3rem"},children:p()})],tags:["autodocs"]},r={args:{tasks:[{...t.args.task,id:"1",title:"Task 1"},{...t.args.task,id:"2",title:"Task 2"},{...t.args.task,id:"3",title:"Task 3"},{...t.args.task,id:"4",title:"Task 4"},{...t.args.task,id:"5",title:"Task 5"},{...t.args.task,id:"6",title:"Task 6"}]}},d={args:{tasks:[...r.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]}},n={args:{tasks:[],loading:!0}},l={args:{...n.args,loading:!1}};var k,m,u;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.jsx.
    tasks: [{
      ...TaskStories.Default.args.task,
      id: '1',
      title: 'Task 1'
    }, {
      ...TaskStories.Default.args.task,
      id: '2',
      title: 'Task 2'
    }, {
      ...TaskStories.Default.args.task,
      id: '3',
      title: 'Task 3'
    }, {
      ...TaskStories.Default.args.task,
      id: '4',
      title: 'Task 4'
    }, {
      ...TaskStories.Default.args.task,
      id: '5',
      title: 'Task 5'
    }, {
      ...TaskStories.Default.args.task,
      id: '6',
      title: 'Task 6'
    }]
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var T,h,f;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tasks: [...Default.args.tasks.slice(0, 5), {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED'
    }]
  }
}`,...(f=(h=d.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var N,y,S;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    tasks: [],
    loading: true
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var D,v,P;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false
  }
}`,...(P=(v=l.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const K=["Default","WithPinnedTasks","Loading","Empty"];export{r as Default,l as Empty,n as Loading,d as WithPinnedTasks,K as __namedExportsOrder,j as default};

(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),o=(a(50),a(4)),c=a(5),s=a(7),m=a(6),u=a(8),p=a(3),h=a(15),d=(a(100),a(16)),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Me"))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact"))}}]),t}(n.Component),b=(a(101),a(25)),v=a.n(b),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(p.Grid,{className:"landing_grid"},r.a.createElement(p.Cell,{col:12},r.a.createElement("img",{src:v.a,alt:"Avatar"}),r.a.createElement("div",{className:"banner_text"},r.a.createElement("h1",null," Software Developer"),r.a.createElement("hr",null),r.a.createElement("p",null,"HTML/CSS | React | ReactNative | JavaScript| Java | NodeJS | Express")),r.a.createElement("div",{className:"social_links_bar"},r.a.createElement("div",{className:"social_links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/sxqnicholas96/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{style:{height:"2em"},class:"fab fa-linkedin","aria-hidden":"true"})),r.a.createElement("a",{href:"https://github.com/sxqnicholas96",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fab fa-github-square","aria-hidden":"true"})),r.a.createElement("a",{href:"mailto:nicholas.seah@u.nus.edu",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{class:"fas fa-envelope-square","aria-hidden":"true"})))))))}}]),t}(n.Component),g=(a(20),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).displayDescripton=function(e){return e.map(function(e){return console.log(e),r.a.createElement("li",null,e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(p.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolName),r.a.createElement("ul",null,this.displayDescripton(this.props.listDescription))))}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).displayDescripton=function(e){return e.map(function(e){return console.log(e),r.a.createElement("li",null,e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(p.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.companyName),r.a.createElement("i",null,this.props.jobRole),r.a.createElement("ul",null,this.displayDescripton(this.props.listDescription))))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).displayDescripton=function(e){return e.map(function(e){return console.log(e),r.a.createElement("li",null,e)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(p.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.activityName),r.a.createElement("ul",null,this.displayDescripton(this.props.listDescription))))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).displayProficiencies=function(e){return e.map(function(e){return r.a.createElement("p",null,e.tool)})},a.displayLevels=function(e){return e.map(function(e){return r.a.createElement("p",null,e.level)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:4},r.a.createElement("b",null," ",this.props.skillTitle)),r.a.createElement(p.Cell,null,this.displayProficiencies(this.props.profList)),r.a.createElement(p.Cell,null,this.displayLevels(this.props.profList)))}}]),t}(n.Component),w=a(42),S=a.n(w),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.Grid,null,r.a.createElement(p.Cell,{col:4},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:v.a,alt:"avatar",style:{height:"200px"}})),r.a.createElement("h2",null,"Seah Xi Qi, Nicholas"),r.a.createElement("h4",{style:{color:"grey"}},"Software Developer"),r.a.createElement("hr",{style:{borderTop:"3px solid #000000",width:"50%"}}),r.a.createElement("div",{className:"links"},r.a.createElement("div",null,r.a.createElement("i",{style:{fontSize:"1.4em"},class:"fab fa-linkedin","aria-hidden":"true"}),r.a.createElement("a",{style:{textDecoration:"None",marginLeft:"0.5em"},href:"https://www.linkedin.com/in/sxqnicholas96/",rel:"noopener noreferrer",target:"_blank"},"My LinkedIn")),r.a.createElement("div",null,r.a.createElement("i",{style:{fontSize:"1.4em"},class:"fab fa-github-square","aria-hidden":"true"}),r.a.createElement("a",{style:{textDecoration:"None",marginLeft:"0.5em"},href:"https://github.com/sxqnicholas96",rel:"noopener noreferrer",target:"_blank"},"My GitHub")),r.a.createElement("div",null,r.a.createElement("i",{style:{fontSize:"1.4em"},class:"fas fa-envelope-square","aria-hidden":"true"}),r.a.createElement("a",{style:{textDecoration:"None",marginLeft:"0.5em"},href:"mailto:nicholas.seah@u.nus.edu",rel:"noopener noreferrer",target:"_blank"},"My Email")),r.a.createElement("div",null,r.a.createElement("i",{style:{fontSize:"1.4em"},class:"fas fa-file-pdf","aria-hidden":"true"}),r.a.createElement("a",{style:{textDecoration:"None",marginLeft:"0.5em"},href:S.a,download:!0},"My Resume"))),r.a.createElement("div",{className:"links"})),r.a.createElement(p.Cell,{className:"resume_right_col",col:8},r.a.createElement("h2",{style:{paddingLeft:"20px"}}," Education"),r.a.createElement(g,{startYear:"Aug 2017",endYear:"Present",schoolName:"National University of Singapore",listDescription:["Bachelor of Computing (Honors) in Information Security"]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(g,{startYear:"Jan 2013",endYear:"Dec 2014",schoolName:"Anglo - Chinese Junior College",listDescription:["Singapore-Cambridge General Certificate of Education Advanced \tLevel","Subjects: Mathematics (A), Physics (B), Chemistry (B), Economics(B), General Paper(B)"]}),r.a.createElement("hr",{style:{borderTop:"3px solid #ffffff",width:"100%"}}),r.a.createElement("h2",{style:{paddingLeft:"20px"}}," Work Experience"),r.a.createElement(k,{startYear:"Aug 2018",endYear:"Present",companyName:"StaffAny",jobRole:"Software Engineer",listDescription:["Worked part-time during university semesters as a quality assurance engineer, responsible for testing product updates and diagnosing bugs that occur before product releases.","Transitioned to software engineering role during study holiday in December 2018 and assisted in building of product features.","Engineered automated tests for the company product on the mobile platform."]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(k,{startYear:"May 2017",endYear:"Aug 2017",companyName:"Pearson Education South Asia Private Limited",jobRole:"Customer Support Assistant",listDescription:["Served as a primary point of contact with customers and helped customers place book orders.","Managed customer complaints and helped to escalate customer inquiries whenever necessary."]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(k,{startYear:"May 2015",endYear:"Mar 2017",companyName:"Singapore Armed Forces",jobRole:"Artillery Operator",listDescription:["Worked in a detachment/section of 8 people whose main function is to deploy an artillery gun.","Recorded the fastest deployment timings for our Detachment Proficiency Test and won the Top Gun award in our unit.","Achieved the second highest score in the history of our gun unit for our FATEP (Field Artillery Training Evaluation Program) as a battery."]}),r.a.createElement("hr",{style:{borderTop:"3px solid #ffffff",width:"100%"}}),r.a.createElement("h2",{style:{paddingLeft:"20px"}}," ","Scholastic/Curricular Achievements"),r.a.createElement(j,{startYear:"Jan 2013",endYear:"Dec 2014",activityName:"Anglo - Chinese Junior College Concert Band",listDescription:["Served as Quartermaster, assisting with the logistic administration of the band.","Achieved Certificate of Distinction, the highest merit in the Singapore Youth Festival 2013 which is a national concert band competition."]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(j,{startYear:"Jun 2009",endYear:"Jun 2012",activityName:"Nan Hua Symphonic Band",listDescription:["Served as Band Major (Chairperson) of the band from 2011 to 2012 and organized day to day activities as well as maintain discipline within the band.","Achieved Silver Award in Singapore Youth Festival 2009 and Gold Award in Singapore Youth Festival 2011.","Awarded the top performer in the band as an extra-curricular activity."]}),r.a.createElement("hr",{style:{borderTop:"3px solid #ffffff",width:"100%"}}),r.a.createElement("h2",{style:{paddingLeft:"20px"}}," Skill Sets & Proficiencies"),r.a.createElement(O,{skillTitle:"Programming",profList:[{tool:"C",level:"Proficient"},{tool:"C++",level:"Proficient"},{tool:"Java",level:"Proficient"},{tool:"Python",level:"Intermediate"},{tool:"Perl",level:"Basic"},{tool:"Shell Scripting",level:"Basic"},{tool:"Intel x86",level:"Basic"}]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(O,{skillTitle:"Scripting",profList:[{tool:"JavaScript",level:"Proficient"}]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(O,{skillTitle:"Markup",profList:[{tool:"XML",level:"Basic"}]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(O,{skillTitle:"Frameworks",profList:[{tool:"React Native",level:"Proficient"},{tool:"ReactJS",level:"Proficient"},{tool:"Express",level:"Intermediate"}]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(O,{skillTitle:"Database",profList:[{tool:"PostgreSQL DBMS",level:"Proficient"},{tool:"SQL",level:"Proficient"}]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(O,{skillTitle:"Server Management & Network",profList:[{tool:"Server Setup/Maintenance",level:"Intermediate"}]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(O,{skillTitle:"Operating Systems",profList:[{tool:"Linux",level:"Proficient"},{tool:"Windows 9x, 2000, XP, Vista, 7, 8, 10",level:"Proficient"}]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(O,{skillTitle:"Multimedia",profList:[{tool:"GIMP",level:"Proficient"},{tool:"Camtasia Studio",level:"Proficient"},{tool:"Adobe Photoshop CS6",level:"Basic"}]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(O,{skillTitle:"Non-technical Skills",profList:[{tool:"Project Management",level:"Intermediate"}]}),r.a.createElement("hr",{className:"content_break"}),r.a.createElement(O,{skillTitle:"Office Productivity",profList:[{tool:"Microsoft Word",level:"Proficient"},{tool:"Microsoft Powerpoint",level:"Proficient"},{tool:"Microsoft Excel",level:"PIntermediate"}]}),r.a.createElement("hr",{style:{borderTop:"3px solid #ffffff",width:"100%"}}),r.a.createElement("h2",{style:{paddingLeft:"20px"}}," Language Proficiency"),r.a.createElement(O,{skillTitle:"Spoken",profList:[{tool:"English",level:"Fluent"},{tool:"Mandarin",level:"Fluent"}]}),r.a.createElement(O,{skillTitle:"Written",profList:[{tool:"English",level:"Competent"},{tool:"Mandarin",level:"Average"}]}))))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Projects"))}}]),t}(n.Component),P=function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:y}),r.a.createElement(d.a,{path:"/contact",component:E}),r.a.createElement(d.a,{path:"/resume",component:N}),r.a.createElement(d.a,{path:"/aboutme",component:f}),r.a.createElement(d.a,{path:"/projects",component:C}))},x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.Layout,null,r.a.createElement(p.Header,{title:"Seah Xi Qi, Nicholas",className:"header_color"},r.a.createElement(p.Navigation,null,r.a.createElement(h.b,{to:"/"},"Home"),r.a.createElement(h.b,{to:"/resume"},"Resume"))),r.a.createElement(p.Drawer,{title:"Navigation"},r.a.createElement(p.Navigation,null,r.a.createElement(h.b,{to:"/"},"Home"),r.a.createElement(h.b,{to:"/resume"},"Resume"))),r.a.createElement(p.Content,null,r.a.createElement(P,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(108),a(109);i.a.render(r.a.createElement(h.a,{basename:"/portfolio"},r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},20:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/avatar.05e66410.png"},42:function(e,t,a){e.exports=a.p+"static/media/Nicholas_Xi_Qi_SEAH_CV.95e4bf30.pdf"},45:function(e,t,a){e.exports=a(110)},50:function(e,t,a){}},[[45,1,2]]]);
//# sourceMappingURL=main.cd86bac3.chunk.js.map
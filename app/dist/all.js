console.log("Load script.js");var app={};const VueApp=Vue.createApp({data:function(){return{title:"hi this is working now",jobsData:[]}},mounted:function(){this.fetcher()},methods:{fetcher(){null===this.getLocal()?(console.log("fetching new data"),fetch("./app/data/data.json").then((o=>o.json())).then((o=>{this.jobsData=o,this.setLocal(o)})).catch((o=>console.log(o)))):(console.log("fetching stored data"),this.jobsData=JSON.parse(this.getLocal())),console.log("logging jobsData: "),console.log(JSON.parse(JSON.stringify(this.jobsData)))},setLocal(o){localStorage.setItem("jobsDataJson",JSON.stringify(o))},getLocal:()=>localStorage.getItem("jobsDataJson")}});app.global={init:function(){console.log("load global functions"),app.global.loadHeader()},loadHeader:function(){console.log("loadHeader()")}},app.global.init(),VueApp.component("job-card",{emits:[],props:{job:{type:Object,required:!0}},template:'\n    <div class="jobCard">\n        <div class="jobContentWrapper">\n            <img :src="logo" :alt="logoAlt">\n            <div class="info">\n                <div class="company">\n                    <p class="companyName">{{company}}</p>\n                    <p class="new" v-show="isNew">NEW!</p>\n                    <p class="featured" v-show="isFeatured">FEATURED</p>\n                </div>\n                <h1 class="position">{{position}}</h1>\n                <p class="jobAttr">\n                    {{postDate}}&nbsp;&nbsp;&nbsp;\n                    &bull;\n                    &nbsp;&nbsp;&nbsp;{{contract}}&nbsp;&nbsp;&nbsp;\n                    &bull;\n                    &nbsp;&nbsp;&nbsp;{{location}}</p>\n\n            </div>\n\n            <div class="attributes">\n                <p class="attrTag">{{role}}</p>\n                <p class="attrTag">{{level}}</p>\n                <p class="attrTag" v-for="(lang, index) in langs" :key="index">{{lang}}</p>\n                <p class="attrTag" v-for="(tool, index) in tools" :key="index">{{tool}}</p>\n            </div>\n        </div>\n\n    </div>\n    ',data:function(){return{company:this.job.company,logo:this.job.logo,isNew:this.job.new,isFeatured:this.job.featured,position:this.job.position,role:this.job.role,level:this.job.level,postDate:this.job.postedAt,contract:this.job.contract,location:this.job.location,langs:this.job.languages,tools:this.job.tools}},computed:{logoAlt:function(){return"icon-"+this.company+"."}},watch:{},methods:{}});
//# sourceMappingURL=all.js.map
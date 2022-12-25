"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2222],{51582:(e,t,n)=>{n.d(t,{w:()=>f});var i=n(74335),o=n(64002),s=n(5366),a=n(50906),r=n(47307),c=n(95477),l=n(71935),d=n(46190),u=n(47593),g=n(54642),p=n(92625),h=n(15356);const m=(0,s.defineMessages)({authenticatingWithAsana:{id:"asanaActions.authenticatingWithAsana.loadingMessage",defaultMessage:"Authenticating with Asana…"},titleMessage:{defaultMessage:"Asana login",id:"asanaActions.loginWithAsanaPopupModal.title"}});async function f(e){const{environment:t,requestStore:n}=e,s=(0,l.eC)(t);let f=(0,i.s1)(c.Z.domainBaseUrl,{authType:s,userId:t.currentUser.id});f=s.redirectToAuth?f:await(0,l.HU)(t,f);const v=await h.M(t,{width:580,height:800,url:f,titleMessage:m.titleMessage});if(!v)return;const S=o.Qc(v);if(!S.query.code||!S.query.state)return;p.j({message:m.authenticatingWithAsana});const y=await g.authWithAsana(t,{code:S.query.code,encryptedState:S.query.state});"failed"===y.type?(console.error(y.error),r.showError(y),p.x()):(a.trackAuthIntegration(t,{integration_name:"asana"}),await n.refresh(),d.Z.setState({open:!0}),u.Z.setState({open:!0}),p.x())}},22711:(e,t,n)=>{n.d(t,{LN:()=>s,C:()=>a,Ow:()=>r,Lm:()=>c,DP:()=>l});var i=n(50906),o=n(54642);async function s(e,t){const n=await o.getConnectedAppsStatus(e,{spaceId:t});if("failed"===n.type){const e=n.error;return console.error(e),{drive:[],evernote:void 0,trello:void 0,asana:void 0,confluence:void 0}}return n.data}async function a(e,t){await o.disconnectTrello(e,{}),await t.refresh(),i.trackRemoveIntegration(e,{integration_name:"trello"})}async function r(e,t){await o.disconnectAsana(e,{}),await t.refresh(),i.trackRemoveIntegration(e,{integration_name:"asana"})}async function c(e,t){await o.disconnectEvernote(e,{}),await t.refresh(),i.trackRemoveIntegration(e,{integration_name:"evernote"})}async function l(e,t,n){await o.disconnectConfluence(e,{spaceId:n}),await t.refresh()}},83805:(e,t,n)=>{n.d(t,{e:()=>f});var i=n(74335),o=n(64002),s=n(5366),a=n(50906),r=n(47307),c=n(95477),l=n(71935),d=n(90365),u=n(47593),g=n(54642),p=n(92625),h=n(15356);const m=(0,s.defineMessages)({authenticatingWithEvernote:{id:"evernoteActions.authenticatingWithEvernote.loadingMessage",defaultMessage:"Authenticating with Evernote…"},titleMessage:{defaultMessage:"Evernote login",id:"evernoteActions.loginPopupModal.title"}});async function f(e){const{environment:t,requestStore:n}=e,s=(0,l.eC)(t);let f=(0,i.Qp)(c.Z.domainBaseUrl,{authType:s,userId:t.currentUser.id});f=s.redirectToAuth?f:await(0,l.HU)(t,f);const v=await h.M(t,{width:580,height:700,url:f,titleMessage:m.titleMessage});if(!v)return;const S=o.Qc(v),y=S.query.oauth_token,b=S.query.oauth_verifier;if(!y||!b)return;p.j({message:m.authenticatingWithEvernote});const M=await g.authWithEvernote(t,{requestToken:y,verifier:b});if("failed"===M.type)return console.error(M.error),r.showError(M),void p.x();a.trackAuthIntegration(t,{integration_name:"evernote"}),await n.refresh(),d.Z.setState({open:!0}),u.Z.setState({open:!0}),p.x()}},52192:(e,t,n)=>{n.d(t,{M:()=>f});var i=n(74335),o=n(64002),s=n(5366),a=n(50906),r=n(47307),c=n(95477),l=n(71935),d=n(47593),u=n(82066),g=n(54642),p=n(92625),h=n(15356);const m=(0,s.defineMessages)({authenticatingWithTrello:{id:"trelloActions.authenticatingWithTrello.loadingMessage",defaultMessage:"Authenticating with Trello…"},titleMessage:{defaultMessage:"Trello login",id:"trelloActions.loginPopupModal.title"}});async function f(e){const{environment:t,requestStore:n}=e,s=(0,l.eC)(t);let f=(0,i.ae)(c.Z.domainBaseUrl,{authType:s,userId:t.currentUser.id});f=s.redirectToAuth?f:await(0,l.HU)(t,f);const v=await h.M(t,{width:580,height:700,url:f,titleMessage:m.titleMessage});if(!v)return;const S=o.Qc(v),y=S.query.oauth_token,b=S.query.oauth_verifier;if(!y||!b)return;p.j({message:m.authenticatingWithTrello});const M=await g.authWithTrello(t,{requestToken:y,verifier:b});"failed"===M.type?(console.error(M.error),r.showError(M),p.x()):(a.trackAuthIntegration(t,{integration_name:"trello"}),await n.refresh(),u.Z.setState({open:!0}),d.Z.setState({open:!0}),p.x())}},11106:(e,t,n)=>{n.d(t,{Z:()=>$});var i=n(77094),o=n.n(i),s=n(97464),a=n.n(s),r=(n(85827),n(67294)),c=n(83355),l=n(480),d=n(16489),u=n(8848),g=n(53397),p=n(27006),h=n(21202),m=n(29369),f=n(5366),v=n(94507),S=n(65452),y=n(28020),b=n(98165),M=n(38755),w=n(27832),C=n(73076),A=n(12318),k=n(86671),I=n(52275),P=n(97758),Z=n(31278),T=n(76798),x=n(14694);class E extends k.Z{renderComponent(){const{isMobile:e,nestingLevel:t}=this.props;return r.createElement(I.Z,a()({},this.props,{title:o()(x.Z,{childrenStyle:E.sidebarChildrenStyle,left:this.renderLeftCheckbox(),icon:this.renderIcon(),isMobile:e,style:{marginLeft:8*t}},void 0,this.renderTitle())}))}renderLeftCheckbox(){return o()(P.Z,{size:16,checked:this.props.isChecked,onClick:this.props.onClick})}renderIcon(){const{store:e,isMobile:t}=this.props,n=e.getIcon();return o()(Z.Z,{disabled:!0,icon:n,title:void 0,isEmptyPage:e.isEmptyPage(),size:t?24:20,pageIconStyle:{fill:this.theme.mediumIconColor}})}renderTitle(){return o()(T.Z,{store:this.props.store})}}E.sidebarChildrenStyle={display:"flex",alignItems:"center"};const D=E;var B=n(74194),N=n(68785),_=n(32163),F=n(44532),L=n(72495),q=n(59054),W=n(97880),U=n(31299),z=n(60709),G=n(78140),O=n(43765),R=n(11470),H=n(78948);function j(e){const{spaceId:t,onSelectPage:n,query:i,source:s,findSelectedBlockAncestorId:c}=e,d=(0,l.O7)();let u=null;const[{status:g,value:m}]=(0,q.r5)((async()=>await U.D7({environment:d,query:i,limit:10,requireEditPermissions:!0,spaceId:t,excludeTemplates:!0,source:s,boostRecentlyViewedPages:!1})),[d,i,t,s],{debounce:U.vp});if("idle"===g||"pending"===g)u=o()(L.Z,{},void 0,o()(H.Z,{}));else{const e=((null==m?void 0:m.results)||[]).map((e=>{let{id:t}=e;const i=new C.G(d,{table:h.iU,id:t});return function(e){const{store:t,environment:n,alreadySelectedAncestorId:i,onSelectPage:s}=e;if(i&&i===t.id)return{key:t.id,action:()=>{},render:e=>r.createElement(R.Z,a()({},e,{store:t,hidePath:!0,disabled:!0,style:{opacity:.5},caption:o()(f.FormattedMessage,{id:"oauthPageSearchResults.disabledResult.bySelf.message",defaultMessage:"Already added"})}))};if(i){const e=new C.G(n,{table:h.iU,id:i});return{key:t.id,action:()=>{},render:n=>r.createElement(R.Z,a()({},n,{store:t,hidePath:!0,disabled:!0,style:{opacity:.5},caption:o()(f.FormattedMessage,{id:"oauthPageSearchResults.disabledResult.byAncestor.message",defaultMessage:"Already added via {ancestorPageName}",values:{ancestorPageName:o()(T.Z,{store:e,style:{display:"inline"}})}})}))}}const c=t.getRole();return c&&p.zz(c)?{key:t.id,action:()=>s(t.id),render:e=>r.createElement(R.Z,a()({store:t,hidePath:!1},e))}:void 0}({store:i,alreadySelectedAncestorId:c(i),environment:d,onSelectPage:n})})).filter(W.$K);u=0===e.length?o()(L.Z,{},void 0,o()(O.Z,{title:o()(f.FormattedMessage,{id:"oauthPageSearchResults.noResults.placeholder",defaultMessage:"No results"})})):function(e){return o()(_.Z,{type:_.i.Vertical,initialFocus:void 0,sections:[{key:"results",items:e,render:e=>r.createElement(L.Z,e)}]})}(e)}const v={menuType:z.o.Popup};return r.createElement(G.Z,v,u)}class K extends c.Z{constructor(){super(...arguments),this.storeTypes={selectedBlockIdsStore:A.default.of({}),searchStore:A.default.of({open:!1,query:void 0})},this.getPageSection=(e,t,n)=>{const i=n.filter((e=>p.zz(e.getRole()||"none")));return{key:e,render:e=>r.createElement(L.Z,e),items:[this.getPageSectionHeader(t,i),...0===i.length?[this.getEmptyState()]:i.map((e=>this.getPageItem(e,1)))]}},this.getPageItem=(e,t)=>{const{selectedBlockIdsStore:n}=this.stores,{device:i}=this.environment,o=Boolean(n.state[e.id]);return{key:e.id,action:()=>this.handleClickPage(e.id,o),render:n=>r.createElement(D,a()({},n,{isMobile:i.isMobile,store:e,isChecked:o,disabled:!1,nestingLevel:t}))}},this.getPageSectionHeader=(e,t)=>{const{selectedBlockIdsStore:n}=this.stores,{device:i}=this.environment,s=t.length>0&&t.every((e=>n.state[e.id]));return{key:e,action:()=>this.handleClickSection(t),render:t=>r.createElement(I.Z,a()({},t,{title:o()(x.Z,{left:o()(P.Z,{onClick:t.onClick,checked:s,size:16}),isMobile:i.isMobile,style:this.getSectionHeaderStyle()},void 0,e)}))}},this.getEmptyState=()=>{const{device:e}=this.environment;return{key:"empty",action:()=>{},render:t=>r.createElement(I.Z,a()({},t,{title:o()(x.Z,{isMobile:e.isMobile,style:{fontSize:14,color:this.theme.mediumTextColor,padding:"2px 32px"}},void 0,o()(f.FormattedMessage,{id:"oauthAuthorizationPage.selectPageStep.empty",defaultMessage:"No pages inside"}))}))}},this.handleClickPage=(e,t)=>{const{selectedBlockIdsStore:n}=this.stores;n.setState({...n.state,[e]:!t})},this.handleClickSection=e=>{const{selectedBlockIdsStore:t}=this.stores,n=e.every((e=>t.state[e.id]));t.setState({...t.state,...e.reduce(((e,t)=>(e[t.id]=!n,e)),{})})},this.handleSearchQueryChange=e=>{const t=this.stores.searchStore.state,n=e.length>0;this.stores.searchStore.setState({...t,query:e,open:n})},this.handleSearchCancel=()=>{const e=this.stores.searchStore.state;this.stores.searchStore.setState({...e,open:!1,query:void 0})},this.findSelectedBlockAncestorId=e=>{const{selectedBlockIdsStore:t}=this.stores;if(t.state[e.id])return e.id;const n=b.fJ(e).find((e=>e.table===h.iU&&Boolean(t.state[e.value.id])));return n?n.value.id:void 0}}renderComponent(){const{intl:e}=this.props,{searchStore:t,selectedBlockIdsStore:n}=this.stores,{device:i}=this.environment,s=(0,y.k_)(this.environment).state;if(!s)return o()(N.Z,{style:{alignSelf:"center"}});const{allSharedPagesStores:c,showWorkspaceSection:l,showTeamSection:d,showSharedSection:u,showPrivateSection:p,showOnlyPrivateSection:v}=s,{currentSpaceViewStore:S,currentSpaceStore:b}=w.default.state;if(!S||!b)return;const A=[];if(d){const e=S.getTeamsStores();A.push(...e.map((e=>[e,e.getTeamPagesStores().filter(V)])))}const k=S.getWorkspacePages().filter(V),I=S.getPrivatePages(this.environment).filter(V),P=Object.keys(n.state).filter((e=>n.state[e])).map((e=>new C.G(this.environment,{table:h.iU,id:e}))).filter((e=>e.getSpaceId()===b.id&&e.isNavigableBlock()&&!e.isTopLevelPrivatePage({spaceStore:b,environment:this.environment})&&!e.isTopLevelWorkspacePage(b.id)&&!(e.getParentTable()===m.e0)&&!c.some((t=>t.id===e.id)))),Z=(0,M.getSpaceName)(this.environment,b),T=[];if(P.length>0&&T.push({key:"manual",render:e=>r.createElement(L.Z,a()({},e,{title:o()(x.Z,{isMobile:i.isMobile,style:this.getSectionHeaderStyle()},void 0,o()(f.FormattedMessage,{id:"oauthAuthorizationPage.selectPagesStep.pagePicker.manuallyAddedPagesSection.title",defaultMessage:"Manually added"})),isTitleUppercase:!0})),items:P.map((e=>this.getPageItem(e,0)))}),l&&T.push(this.getPageSection("workspace",e.formatMessage({id:"oauthAuthorizationPage.selectPagesStep.pagePicker.workspaceSection.title",defaultMessage:"Workspace",description:"This word is used in the same context as the title for the Workspace section of the sidebar."}),k)),d)for(const[o,a]of A){const e=o.id,t=o.getName();e&&void 0!==t&&T.push(this.getPageSection(`team-${e}`,t,a))}if(u&&T.push(this.getPageSection("shared",e.formatMessage({id:"oauthAuthorizationPage.selectPagesStep.pagePicker.sharedSection.title",defaultMessage:"Shared",description:"This word is used in the same context as the title for the Shared section of the sidebar."}),c)),p){const t=v?Z||"":e.formatMessage({id:"oauthAuthorizationPage.selectPagesStep.pagePicker.privateSection.title",defaultMessage:"Private",description:"This word is used in the same context as the title for the Private section of the sidebar."});T.push(this.getPageSection("private",t,I))}return r.createElement(r.Fragment,null,o()(F.GI,{origin:o()(B.Z,{style:{marginBottom:8},focus:!0,focusAfterAnimation:!0,value:t.state.query||"",onChange:e=>{this.handleSearchQueryChange(e.target.value)},left:g.Z.searchThick(this.getSearchIconStyle()),placeholder:e.formatMessage({id:"oauthAuthorizationPage.selectPagesStep.pagePicker.search.placeholder",defaultMessage:"Search for pages in {workspaceName}"},{workspaceName:Z})}),sameWidthAsOrigin:!0,popupType:F.GI.PopupType.Popup,open:t.state.open,render:()=>o()(j,{spaceId:b.id,onSelectPage:e=>this.handleClickPage(e,!1),query:t.state.query||"",source:"oauth",findSelectedBlockAncestorId:this.findSelectedBlockAncestorId}),onDismiss:this.handleSearchCancel}),o()("div",{style:this.getPageListStyle()},void 0,o()(_.Z,{type:_.i.Vertical,sections:T,initialFocus:void 0})))}getSectionHeaderStyle(){return{textTransform:"uppercase",fontSize:12,fontWeight:600,color:this.theme.mediumTextColor,padding:"2px 0"}}getPageListStyle(){return{alignItems:"left",width:"100%",height:380,borderWidth:1,borderStyle:"solid",borderColor:u.ZP.contentBorder,borderRadius:4,overflowY:"auto"}}getSearchIconStyle(){return{width:14,height:14,marginLeft:8,marginRight:8,flexGrow:0,flexShrink:0,fill:this.theme.mediumIconColor}}}function V(e){return e.isDefined()&&"copy_indicator"!==e.getType()}const $=function(e){const t=(0,l.O7)(),n=(0,d.VK)((()=>{var e;return null===(e=w.default.state.currentSpaceStore)||void 0===e?void 0:e.id}),[]),i=t.currentUser.id,o=(0,f.useIntl)();return(0,d.VK)((()=>{n&&i&&((0,S.h)({environment:t,spaceId:n,userId:i}),(0,v.I)({environment:t,spaceId:n,userId:i}))}),[t,n,i]),r.createElement(K,a()({intl:o},e))}},70578:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(77094),o=n.n(i),s=n(67294),a=n(480),r=n(53397),c=n(5366),l=n(89101),d=n(50906),u=n(33665),g=n(16354),p=n(91941);function h(){const e=(0,a.O7)();return s.createElement(s.Fragment,null,o()(g.Z,{style:{display:"flex",marginLeft:-6},className:"notion-print-ignore",href:`${l._j.integrations}/all`,external:!0,onClick:()=>{d.trackDeveloperIntegrationsAllIntegrationsClick(e,{from:"integration-settings",href:`${l._j.integrations}/all`})}},void 0,o()(p.Z,{icon:r.Z.alias,isSmall:!0,isLightGray:!0},void 0,o()(c.FormattedMessage,{id:"connectionsSettingsLinks.connectionsGallery",defaultMessage:"Browse connections in Gallery",description:"This link, when clicked, takes users to a page where they can create their own public or private connection to external tools."}))),o()(g.Z,{style:{display:"flex",marginLeft:-6},className:"notion-print-ignore",href:l._j.myIntegrations,external:!0,onClick:()=>{d.trackDeveloperIntegrationsMyIntegrationsClick(e,{from:"integration-settings",href:l._j.myIntegrations})}},void 0,o()(p.Z,{icon:r.Z.alias,isSmall:!0,isLightGray:!0},void 0,o()(c.FormattedMessage,{id:"connectionsSettingsLinks.manageConnections",defaultMessage:"Develop or manage integrations",description:"This link, when clicked, takes users to a page where they can create their own public or private connection."}))),o()(g.Z,{style:{display:"flex",marginLeft:-6},className:"notion-print-ignore",href:(0,u.UY)("guides.publicAPI"),external:!0},void 0,o()(p.Z,{icon:r.Z.help,isSmall:!0,isLightGray:!0},void 0,o()(c.FormattedMessage,{id:"connectionsSettingsLinks.helpCenter",defaultMessage:"Learn more about connections",description:"This link, when clicked, will direct the user to the help center."}))))}},92222:(e,t,n)=>{n.d(t,{Z:()=>Te,O:()=>Ze});var i=n(77094),o=n.n(i),s=n(96486),a=n.n(s),r=n(67294),c=n(83355),l=n(41892),d=n(74181),u=n(77420),g=n(9844),p=n(75246),h=n(90965),m=n(5500),f=n(97880),v=n(5366),S=n(50906),y=n(54642),b=n(51582),M=n(76463),w=n(22711),C=n(47307),A=n(91584),k=n(83805),I=n(89475),P=n(52192),Z=n(761),T=n(95477);var x=n(38755),E=n(34859),D=n(27832),B=n(88632),N=n(30874),_=n(73076),F=n(72087),L=n(78291),q=n(480),W=n(24405),U=n(82990),z=n(74420),G=n(91941),O=n(23189);function R(e){const{apps:t,numberOfConnectedApps:n}=e,i=(0,q.O7)(),[s,a]=(0,r.useState)(!1),c=t.filter((e=>!e.shouldHideInDiscover)),l=c.length>3&&!s,d=s?c:c.slice(0,3);return r.createElement(r.Fragment,null,o()(O.Z,{large:!0,divider:"full"},void 0,o()("div",{style:{display:"flex",justifyContent:"space-between",height:28}},void 0,o()(v.FormattedMessage,{id:"connectionsSettings.discoverNewConnectionsSection.title",defaultMessage:"Discover new connections",description:"Section title for uninstalled connections"}),l&&o()(G.Z,{isBlue:!0,onClick:()=>{s||(a(!0),S.trackClickDiscoverAppsShowAll(i,{numberOfConnectedApps:n}))}},void 0,o()(v.FormattedMessage,{id:"connectedAppsSettings.discoverNewAppSection.showAll.label",defaultMessage:"Show all"})))),o()("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:32}},void 0,d.map((e=>"string"==typeof e.logo&&e.onConnect&&o()(H,{appName:e.appName,caption:e.caption,shouldShowNewBadge:e.shouldShowNewBadge,logo:e.logo,onConnect:e.onConnect},e.id))).filter((e=>(0,f.$K)(e)))))}function H(e){const{appName:t,caption:n,logo:i,shouldShowNewBadge:s,onConnect:a}=e,r=(0,W.y)((e=>({card:{display:"flex",flexDirection:"column",width:160},image:{width:32,height:32,borderRadius:3},topRow:{display:"flex",alignItems:"center",marginTop:8},title:{fontWeight:U.Z.fontWeight.medium,fontSize:14},caption:{marginTop:2,fontWeight:U.Z.fontWeight.regular,color:e.mediumTextColor,fontSize:12,maxHeight:64,overflow:"hidden"},button:{marginLeft:-8,marginTop:3}})),[]);return o()("div",{style:r.card},void 0,o()("img",{style:r.image,src:i}),o()("div",{style:r.topRow},void 0,o()("div",{style:r.title},void 0,t),s&&o()(z.Z,{})),o()("div",{style:r.caption},void 0,n),o()("div",{style:r.button},void 0,o()(G.Z,{isBlue:!0,onClick:a},void 0,o()(v.FormattedMessage,{id:"connectedAppSettingsDiscoverItem.connectButton.label",defaultMessage:"Connect"}))))}var j=n(70578),K=n(61519),V=n(68785),$=n(77137),Q=n(18647),Y=n(64369),J=n(27386),X=n(31278),ee=n(40235),te=n(97464),ne=n.n(te),ie=(n(85827),n(16489)),oe=n(8848),se=n(26825),ae=n(21202),re=n(76464),ce=n(30149),le=n(60709),de=n(21115),ue=n(12318),ge=n(24736),pe=n(11106),he=n(42922),me=n(52275),fe=n(31945),ve=n(78140),Se=n(32163),ye=n(63296),be=n(72495),Me=n(82902);function we(e){const{botId:t,canSelectPageAccess:n,onConnect:i,onDisconnect:s}=e,[a,c]=(0,r.useState)(!1),[l]=(0,r.useState)(new ue.default({})),[{currentSpaceStore:d}]=(0,ie.oR)(D.default),g=(0,q.O7)(),p=(0,q.Fy)(),[h]=(0,ie.oR)(L.default),m=[];if(n){const e=(h.data?(0,de.NM)(h.data):[]).find((e=>e.botId===t)),n=null==e?void 0:e.pageIds.reduce(((e,t)=>(e[t]=!0,e)),{});n&&d&&(a||(l.setState(n),c(!0)),m.push({key:"actions for user guest connections",render:e=>r.createElement(be.Z,e),items:[{key:"update selected pages",render:(e,i)=>r.createElement(Me.Z,ne()({},e,{onFocus:i.onFocus,disableDefaultClick:!0,renderOrigin:e=>r.createElement(me.Z,ne()({},e,{title:o()(v.FormattedMessage,{id:"userConnectionsSettings.actionMenu.selectPages.label",defaultMessage:"Access selected pages",description:"Menu option to update which workspace pages a guest connection has access to"})})),renderExtension:(e,i)=>{return o()("div",{style:{width:400,padding:20}},void 0,o()(pe.Z,{selectedBlockIdsStore:l}),(s={leftText:o()(v.FormattedMessage,{id:"userConnectionsSettings.actionMenu.pagePicker.cancel",defaultMessage:"Cancel",description:"Button to cancel updating page permissions for a user-installed connection"}),leftAction:()=>{l.setState(n),i.close()},rightText:o()(v.FormattedMessage,{id:"userConnectionsSettings.actionMenu.pagePicker.update",defaultMessage:"Update access",description:"This button, once clicked, updates the pages that a user-installed connection has access to."}),rightAction:()=>{!function(e){const{botId:t,currentSpaceStore:n,environment:i,selectedBlockIdsStore:o,currentAccessedPages:s}=e,a=[],r=[],c=o.get();Object.keys(c).forEach((e=>{s.hasOwnProperty(e)&&!c[e]?a.push(e):!s.hasOwnProperty(e)&&c[e]&&r.push(e)}));const l=(0,_.Kv)(n,{table:u.cZ,id:t}).getValue(),d={type:"bot_permission",bot_id:t,role:(0,se.uH)(null==l?void 0:l.capabilities)},g={type:"bot_permission",bot_id:t,role:"none"};a.forEach((e=>{const t=(0,_.Kv)(n,{table:ae.iU,id:e});ce.createAndCommit({userAction:"BlockPermissionsSettings.handlePermissionItemChange",environment:i,perform:e=>{re.ep({environment:i,store:t,permissionItems:[g],transaction:e})}})})),r.forEach((e=>{const t=(0,_.Kv)(n,{table:ae.iU,id:e});ce.createAndCommit({userAction:"BlockPermissionsSettings.handlePermissionItemChange",environment:i,perform:e=>{re.ep({environment:i,store:t,permissionItems:[d],transaction:e})}})}))}({selectedBlockIdsStore:l,environment:g,currentSpaceStore:d,botId:t,currentAccessedPages:n}),i.close()}},o()("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:24}},void 0,o()(ye.Z,{isLarge:!0,onClick:s.leftAction,style:{height:32}},void 0,s.leftText),o()(he.Z,{isLarge:!0,onClick:s.rightAction},void 0,s.rightText))));var s}})),action:()=>{}}]}))}const f=[];return i&&f.push({key:"connect account",render:e=>r.createElement(me.Z,ne()({},e,{title:o()(v.FormattedMessage,{id:"userConnectionsSettings.actionMenu.connectAccount.label",defaultMessage:"Connect another account",description:"Menu option to connect another third-party account from an installed connection"}),onClick:i})),action:i}),f.push({key:"disconnect account",render:e=>r.createElement(me.Z,ne()({},e,{title:o()("div",{style:{color:oe.ZP.red}},void 0,o()(v.FormattedMessage,{id:"userConnectionsSettings.actionMenu.disconnectAccount.label",defaultMessage:"Disconnect account",description:"Menu option to disconnect a third-party account from an installed connection"})),onClick:()=>{s()}})),action:()=>s()}),m.push({key:"actions for all user connections",render:e=>r.createElement(be.Z,e),items:f}),o()(fe.Z,{popupType:p.isMobile?fe.Z.PopupType.SlideUp:fe.Z.PopupType.Popup,renderOrigin:e=>r.createElement(ge.Z,ne()({},e,{isMobile:p.isMobile})),render:()=>o()(ve.Z,{menuType:p.isMobile?le.o.ActionSheet:le.o.Popup},void 0,o()(Se.Z,{type:Se.i.Vertical,sections:m,initialFocus:void 0}))})}function Ce(e){const{userConnections:t}=e;return o()(ee.Z,{columns:[{key:"connection",header:o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.connectionsColumn.title",defaultMessage:"Connection",description:"Table header for access column in user connections table"}),style:{width:"40%"}},{key:"access",header:o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.accessColumn.title",defaultMessage:"Access",description:"Table header for access column in user connections table"}),style:{width:"40%"}},{key:"more",header:void 0,style:{width:"5%"}}],rows:Ae(t)})}function Ae(e){const t=[];return e.forEach((e=>{const{account:n,onDisconnect:i}=e;if(Array.isArray(n)){const o=n.map((t=>ke({connection:{...e,onDisconnect:()=>{i(t)}},accountName:t.accountName})));t.push(...o)}else"string"!=typeof n&&void 0!==n||t.push(ke({connection:e,accountName:n}))})),t}function ke(e){const{accountName:t,connection:{id:n,appName:i,canSelectPageAccess:s,capabilities:a,logo:r,onConnect:c,onDisconnect:l}}=e;return{key:`${n}-${t}`,columns:[o()(Ie,{accountName:t,connectionLogo:r,connectionName:i},"connection-title"),a,o()(we,{botId:n,canSelectPageAccess:s,connectionName:i,onConnect:c,onDisconnect:l},"connection-action-menu")]}}function Ie(e){const{accountName:t,connectionLogo:n,connectionName:i}=e;return o()("div",{style:{display:"flex",alignItems:"center",marginRight:12}},void 0,"string"==typeof n?o()("img",{src:n,style:{height:28}}):o()(X.Z,{disabled:!0,icon:n,title:i,isEmptyPage:!1,size:28,isLarge:!0,useInvertedColors:!0}),o()("div",{style:{marginLeft:15}},void 0,o()(Y.Z,{},void 0,i),t&&o()(Y.Z,{isSmall:!0},void 0,t)))}class Pe extends c.Z{constructor(){super(...arguments),this.storeTypes={requestStore:F.Z},this.loadConnections=async e=>{const{currentSpaceStore:t}=D.default.state;return{guestBotIds:await this.fetchUserGuestBotIds(),connectionStatus:await w.LN(e,null==t?void 0:t.id)}},this.fetchUserGuestBotIds=async()=>{const{currentSpaceStore:e,currentUserStore:t}=D.default.state;if(!e||!t||!L.default.state.data)return[];return(await(0,M.Yw)({environment:this.environment,table:p.bx,id:e.id,type:"guest"})).botIds.filter((n=>{const i=(0,_.Kv)(e,{table:u.cZ,id:n}).getValue();return(null==i?void 0:i.created_by_id)===t.id}))}}renderComponent(){return B.Z.state.online?o()($.Z,{request:this.environment,performRequest:this.loadConnections,requestStore:this.stores.requestStore,render:(e,t)=>null!=t&&t.connectionStatus?this.renderConnectedAppsSettings(t.guestBotIds):o()("div",{style:Pe.loadingWrapStyle},void 0,o()(V.Z,{}))}):this.renderOfflineMessage()}renderOfflineMessage(){return o()(J.Z,{},void 0,o()(Y.Z,{isSmall:!0,style:{textAlign:"center"}},void 0,o()(v.FormattedMessage,{id:"connectedAppsSettings.offline.message",defaultMessage:"Please go online to manage connecting to apps."})))}renderConnectedAppsSettings(e){const{connected:t,discover:n}=this.getAppsByCategory(e),i=t.length>0;return o()("div",{style:this.getWrapStyle()},void 0,o()(Q.Z,{style:Pe.scrollerStyle,type:E.Z.Y},void 0,i&&r.createElement(r.Fragment,null,o()(O.Z,{large:!0,divider:"full",style:{borderBottom:"none",marginBottom:0}},void 0,o()(v.FormattedMessage,{id:"connectionsSettings.connectionsSection.title",defaultMessage:"My connections",description:"Section title for user integrations/connections tab in settings modal"})),o()(Ce,{userConnections:t})),o()("div",{style:{marginTop:i?32:void 0}},void 0,o()(R,{apps:n,numberOfConnectedApps:t.length})),o()(K.Z,{size:32}),o()("div",{style:{marginTop:8}},void 0,o()(j.Z,{}))))}async handleDriveAuth(){S.trackPromptAuthIntegration(this.environment,{integration_name:"google",from:"connected_apps"}),await A.qN(this.environment),await w.LN(this.environment),await this.stores.requestStore.refresh()}handleDisconnectDrive(e){const{intl:t}=this.props;C.showDialog({message:t.formatMessage({id:"connectedAppsSettings.disconnectGoogleDriveModal.message",defaultMessage:"Disconnecting disables file preview on Google Drive files embedded in all of your workspaces. It would not delete your embeds from Notion, so you can re-connect at anytime."}),showCancel:!0,keepFocus:!0,items:[{label:t.formatMessage({id:"connectedAppsSettings.disconnectGoogleDriveModal.disconnectButton.label",defaultMessage:"Disconnect"}),color:"red",onAccept:async()=>{await y.disconnectDrive(this.environment,{googleUserId:e.accountId}),await w.LN(this.environment),await this.stores.requestStore.refresh()}}]})}getAppsByCategory(e){const t=a().groupBy([...this.getExternalIntegrations(),...this.getLegacyConnectedApps()],(e=>e.account&&e.account.length>0?"connected":"discover"));return{connected:[...this.getUserGuestIntegrations(e),...t.connected||[]],discover:t.discover||[]}}shouldShowGoogleDriveLegacyApp(){const{integrations:{state:e}}=N.Z;return!e.some((e=>e.id===m.iK.google_drive.id))}getLegacyConnectedApps(){var e;const{intl:t}=this.props,n=this.stores.requestStore;let i=!1;const{currentSpaceStore:s}=D.default.state,a=null===(e=n.state.result)||void 0===e?void 0:e.connectionStatus,r=(null==a?void 0:a.drive)&&(null==a?void 0:a.drive.length)>0,c=this.shouldShowGoogleDriveLegacyApp();if(c){const e=null==s?void 0:s.getBotSettingsStore().getValue();i=!(0,h.CJ)(e)||Boolean((null==e?void 0:e.integration_approval_statuses)&&e.integration_approval_statuses[d._o])}const u=o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.accessColumn.legacyImporter",defaultMessage:"Can only add pages",description:"A label describing what capabilities a legacy importer connection has. Legacy importers include the Trello and Asana connections"});return[...c&&(i||r)?[{id:"drive",appName:"Google Drive",caption:t.formatMessage({id:"connectedAppsSettings.googleDrive.caption",defaultMessage:"Find and embed your files."}),shouldHideConnectAccount:!i,shouldHideInDiscover:!c,logo:l.Z.images.import.googleDrivePng,account:null==a?void 0:a.drive,capabilities:o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.accessColumn.googleDrive",defaultMessage:"Can embed content",description:"A label describing what capabilities the legacy Google Drive connection has"}),canSelectPageAccess:!1,onConnect:()=>this.handleDriveAuth(),onDisconnect:e=>{e&&this.handleDisconnectDrive(e)}}]:[],{id:"evernote",appName:"Evernote",caption:t.formatMessage({id:"connectedAppsSettings.evernote.caption",defaultMessage:"Import notebooks."}),logo:l.Z.images.import.evernotePng,account:null==a?void 0:a.evernote,capabilities:u,canSelectPageAccess:!1,onConnect:()=>k.e({environment:this.environment,requestStore:n}),onDisconnect:()=>w.Lm(this.environment,n)},{id:"trello",appName:"Trello",caption:t.formatMessage({id:"connectedAppsSettings.trello.caption",defaultMessage:"Import your boards."}),logo:l.Z.images.import.trelloPng,shouldHideInDiscover:!0,account:null==a?void 0:a.trello,capabilities:u,canSelectPageAccess:!1,onConnect:()=>P.M({environment:this.environment,requestStore:n}),onDisconnect:()=>w.C(this.environment,n)},{id:"asana",appName:"Asana",caption:t.formatMessage({id:"connectedAppsSettings.asana.caption",defaultMessage:"Import tasks from boards and lists."}),logo:l.Z.images.import.asanaPng,shouldHideInDiscover:!0,account:null==a?void 0:a.asana,capabilities:u,canSelectPageAccess:!1,onConnect:()=>b.w({environment:this.environment,requestStore:n}),onDisconnect:()=>w.Ow(this.environment,n)},...null!=s&&s.id?[{id:"confluence",appName:"Confluence",caption:t.formatMessage({id:"connectedAppsSettings.confluence.caption",defaultMessage:"Import Spaces from Confluence.",description:"A label describing what capabilities the Confluence connection has"}),logo:l.Z.images.import.confluencePng,shouldHideInDiscover:!0,account:null==a?void 0:a.confluence,capabilities:u,canSelectPageAccess:!1,onDisconnect:()=>w.DP(this.environment,n,s.id)}]:[]]}getUserGuestIntegrations(e){const{currentSpaceStore:t}=D.default.state;if(!t||(0,x.isGuestOfSpace)(t))return[];return e.map((e=>{const n=(0,_.Kv)(t,{table:u.cZ,id:e}).getValue();if(!(n&&n.alive&&n.name&&n.integration_id))return;const i=n.icon?{pointer:{table:g.K2,id:n.integration_id},icon:n.icon}:void 0;return{id:n.id,appName:n.name,caption:void 0,account:void 0,logo:i,capabilities:o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.accessColumn.userGuest",defaultMessage:"Can {capabilities} content",description:"Bot capabilities for a public guest connection. Example: 'This bot can view and insert content'",values:{capabilities:o()(v.FormattedList,{value:Ze(n.capabilities),type:"conjunction"})}}),canSelectPageAccess:!0,onDisconnect:async()=>{await C.confirmUserAction({message:o()("span",{},void 0,o()(v.FormattedMessage,{id:"userConnectionsSettings.deleteExternalAuthorization.withoutAccountName.confirmationMessage",defaultMessage:"Are you sure you want to revoke access for this account?",description:"Popup message when user selects 'Disconnect account' on the connection menu"})),acceptLabel:o()(v.FormattedMessage,{id:"userConnectionsSettings.deleteExternalAuthorization.confirmDelete.label",defaultMessage:"Yes",description:"Confirmation button when user uninstalls a connection"})})&&await(0,M.P0)({environment:this.environment,botId:n.id,onSuccess:()=>{}})}}})).filter(f.$K)}getExternalBotCapabilities(e){const t=[o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.botAccess.previewLinks",defaultMessage:"preview links",description:"A bot can 'preview links' so content appears before clicking on a link"})];return function(e){return!!e.info.original_url_patterns&&e.info.original_url_patterns.some((e=>{var t;return null===(t=e.additional_types)||void 0===t?void 0:t.collection}))}(e)&&t.push(o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.botAccess.syncDatabases",defaultMessage:"sync databases",description:"A bot can 'sync databases' so that pasted links can turn into a database"})),t}getExternalIntegrations(){const{currentSpaceStore:e}=D.default.state;if(!e||!e.canEdit())return[];const t=e.getBotSettingsStore().getValue(),n=e.id,{integrations:{state:i},bots:{state:s},externalAuthentications:{state:c}}=N.Z;return i.map((i=>{if(!i.info.icon)return;const l=s.filter((e=>e.integration_id===i.id)),g=a().compact(l.map((e=>{const t=c.find((t=>t.parent_id===e.id));if(t)return{accountId:e.id,accountName:t.account_name}}))),p=(0,h.hU)({spaceBotSettings:t,integrationId:i.id,env:T.Z.env}),m=g.length>0;if(!p&&!m)return;const f=!p,y=o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.accessColumn.external",defaultMessage:"Can {capabilities}",description:"Bot capabilities for a external connections. Example: 'This bot can preview links and sync databases'",values:{capabilities:o()(v.FormattedList,{value:this.getExternalBotCapabilities(i),type:"conjunction"})}}),b=Boolean(i.capabilities&&Object.keys(i.capabilities).filter((e=>"link_preview"!==e&&"synced_database"!==e)).length);return{id:i.id,appName:i.name,caption:i.info.tagline,logo:i.info.icon,account:g,shouldHideConnectAccount:f,shouldShowNewBadge:!i.info.hide_new_badge,capabilities:(0,d.z4)(i)?r.createElement(r.Fragment,null,o()("div",{},void 0,y),b?o()("div",{},void 0,o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.accessColumn.externalWithCapabilities",defaultMessage:"Can {capabilities} content",description:"Bot capabilities for a external connections with guest capabilities. Example: 'This bot can view content'",values:{capabilities:o()(v.FormattedList,{value:Ze(i.capabilities),type:"conjunction"})}})):null):y,canSelectPageAccess:!1,onConnect:async()=>{await(0,I.h)({environment:this.environment,integration:i,spaceId:n}),Z.pJ({environment:this.environment}),S.trackConnectExternalIntegration(this.environment,{integrationId:i.id,numberOfAccountsAlreadyConnected:g.length,from:"connected_apps_settings"})},onDisconnect:async t=>{const n=s.find((e=>e.id===(null==t?void 0:t.accountId)));if(n){const s=(0,_.Kv)(e,{table:u.cZ,id:n.id,spaceId:n.space_id}),a=null!=t&&t.accountName?o()(v.FormattedMessage,{id:"connectedAppSettings.deleteExternalAuthorization.withAccountName.confirmationMessage",defaultMessage:"Are you sure you want to revoke access for {accountName}?",values:{accountName:t.accountName}}):o()(v.FormattedMessage,{id:"connectedAppSettings.deleteExternalAuthorization.withoutAccountName.confirmationMessage",defaultMessage:"Are you sure you want to revoke access for this account?"});await C.confirmUserAction({message:o()("span",{},void 0,a),acceptLabel:o()(v.FormattedMessage,{id:"connectedAppSettings.deleteExternalAuthorization.confirmDelete.label",defaultMessage:"Yes"})})&&(await(0,M.P0)({environment:this.environment,botId:s.id,onSuccess:()=>{}}),S.trackDisconnectExternalIntegration(this.environment,{integrationId:i.id}))}}}})).filter(f.$K)}getWrapStyle(){return{display:"flex",flexDirection:"column",height:"100%",width:"sidebar-modal"===this.props.location?"100%":"auto"}}}function Ze(e){const t=[];return null!=e&&e.read_content&&t.push(o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.botAccess.readContent",defaultMessage:"view",description:"Example: 'This bot can view page content'"})),null!=e&&e.insert_content&&t.push(o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.botAccess.insertContent",defaultMessage:"insert",description:"Example: 'This bot can insert page content'"})),null!=e&&e.update_content&&t.push(o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.botAccess.updateContent",defaultMessage:"update",description:"Example: 'This bot can update page content'"})),t}Pe.loadingWrapStyle={alignItems:"center",display:"flex",flexDirection:"column",flex:1,height:"100%",justifyContent:"center"},Pe.scrollerStyle={height:"100%",padding:"36px 60px"};const Te=(0,v.injectIntl)(Pe)},46190:(e,t,n)=>{n.d(t,{Z:()=>i});const i=new(n(61766).Z)},90365:(e,t,n)=>{n.d(t,{Z:()=>i});const i=new(n(61766).Z)},82066:(e,t,n)=>{n.d(t,{Z:()=>i});const i=new(n(61766).Z)}}]);
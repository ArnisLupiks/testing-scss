function l(a,n,i){return a.icons&&a.icons.includes(i)?`<li class='ul-visibility -on -off-desktop'>
          <a href="#" class='ul-application-header__link' aria-label='${i}'>
            <div>
              <i class="ul-icon material-icons">${n}</i>
              <span class="ul-tooltip -bottom">${i}</span>
            </div>
          </a>
        </li>`:""}const r=a=>a.centered?'<div class="ul-grid__container">':"",c=a=>a.centered?"</div>":"",p={title:"Components/Ul-Header",tags:["autodocs"],parameters:{layout:"fullscreen"},render:a=>`<header class="ul-application-header ${a.theme}" id='topbar' role='navigation' aria-label='Global navigation'>
    ${r(a)}     
    <div class="ul-application-header__left">
      <div class='ul-application-header__logo'></div>
        <a href="#" class='ul-application-header__app_menu' aria-label='Application switcher'>
          <i class="ul-icon material-icons">apps</i>
          <span class="ul-tooltip -bottom">Other Applications</span>
        </a>
        <h1 class="ul-application-header__appname"><a href="#">Product Name</a></h1>
      </div>
      <div class="ul-application-header__right">
        <ul>
          ${l(a,"shopping_cart","Shopping Cart")}
          ${l(a,"comment","Comment")}
          ${l(a,"notifications","Notifications")}
          <li class='ul-visibility -off -on-tablet' aria-label='Menu'>
            <a href='#' class='ul-application-header__link'>
              <div>
                <i class="ul-icon material-icons">menu</i>
              </div>
            </a>
          </li>
        </ul>
        <a class='ul-application-header__avatar' href="#">
          <div class='ul-avatar -medium -red'>UL</div>
        </a>
      </div>
      ${c(a)}
  </header>`,argTypes:{theme:{control:{type:"inline-radio",labels:{"":"",uls:"UL Solutions",ultrus:"Ultrus"}},options:["uls","ultrus"]},icons:{control:{type:"check"},options:["Shopping Cart","Comment","Notifications"]},centered:{control:{type:"boolean",labels:{"":""}}}},args:{theme:"uls",centered:!1,icons:["Comment","Notifications"]}},e={args:{theme:"uls"}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    theme: "uls"
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const d=["UlHeader"];export{e as UlHeader,d as __namedExportsOrder,p as default};

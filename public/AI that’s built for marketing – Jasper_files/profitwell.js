!function(){"use strict";var t=function(){function t(){}return t.prototype.trackAnonymousCustomer=function(){},t.prototype.getAnonymousId=function(){return null},t}(),e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,r)};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var r=function(){return(r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function n(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))}function i(t,e){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function o(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(t){var e={exports:{}};return t(e,e.exports),e.exports}var u=a((function(t,e){var r=s&&s.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.assertUnreachable=e.fail=e.UnexpectedNilError=e.InvalidStateError=e.InvalidArgumentError=e.CustomError=e.CommonErrorReasons=void 0,function(t){t.unreachableCode="unreachableCode"}(e.CommonErrorReasons||(e.CommonErrorReasons={}));var n=function(t){function e(e){var r=this.constructor,n=t.call(this,e)||this;return Object.setPrototypeOf(n,r.prototype),n}return r(e,t),e}(Error);e.CustomError=n;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(n);e.InvalidArgumentError=i;var o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(n);e.InvalidStateError=o;var a=function(t){function e(){return t.call(this,"Unexpected nil value")||this}return r(e,t),e}(n);function u(t){throw new Error(t)}e.UnexpectedNilError=a,e.fail=u,e.assertUnreachable=function(t,e){return u(t+e)}})),c=a((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.assertUnreachable=e.UnexpectedNilError=e.InvalidStateError=e.InvalidArgumentError=e.CustomError=e.CommonErrorReasons=e.fail=void 0,Object.defineProperty(e,"fail",{enumerable:!0,get:function(){return u.fail}}),Object.defineProperty(e,"CommonErrorReasons",{enumerable:!0,get:function(){return u.CommonErrorReasons}}),Object.defineProperty(e,"CustomError",{enumerable:!0,get:function(){return u.CustomError}}),Object.defineProperty(e,"InvalidArgumentError",{enumerable:!0,get:function(){return u.InvalidArgumentError}}),Object.defineProperty(e,"InvalidStateError",{enumerable:!0,get:function(){return u.InvalidStateError}}),Object.defineProperty(e,"UnexpectedNilError",{enumerable:!0,get:function(){return u.UnexpectedNilError}}),Object.defineProperty(e,"assertUnreachable",{enumerable:!0,get:function(){return u.assertUnreachable}})})),l=a((function(t,e){function r(t){return null==t}function n(t,e){return r(t)?e:t}Object.defineProperty(e,"__esModule",{value:!0}),e.isEnumMember=e.isValidEmail=e.isStringEmpty=e.checkBoolean=e.checkArray=e.checkString=e.checkNumber=e.checkWithKey=e.getValueOrDefault=e.checkNotNil=e.checkState=e.checkArgument=e.isNotNil=e.isNil=void 0,e.isNil=r,e.isNotNil=function(t){return!r(t)},e.checkArgument=function(t,e){if(!t){var r=n(e,"Invalid argument");throw new c.InvalidArgumentError(r)}},e.checkState=function(t,e){if(!t){var r=n(e,"Invalid state");throw new c.InvalidStateError(r)}},e.checkNotNil=function(t,e){if(r(t)){if(r(e))throw new c.UnexpectedNilError;return(0,c.fail)(e)}return t},e.getValueOrDefault=n,e.checkWithKey=function(t,e){if(!(t in e))throw new TypeError("Missing key ".concat(t))},e.checkNumber=function(t){if("number"!=typeof t)throw new TypeError("Value is not a number")},e.checkString=function(t){if("string"!=typeof t)throw new TypeError("Value is not a string")},e.checkArray=function(t){if(!Array.isArray(t))throw new TypeError("Value is not an array")},e.checkBoolean=function(t){if("boolean"!=typeof t)throw new TypeError("Value is not a boolean")},e.isStringEmpty=function(t){return""===t.trim()},e.isValidEmail=function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},e.isEnumMember=function(t,e){return Object.values(e).includes(t)}})),d=a((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.isEnumMember=e.isValidEmail=e.isStringEmpty=e.checkBoolean=e.checkArray=e.checkString=e.checkNumber=e.checkWithKey=e.getValueOrDefault=e.checkNotNil=e.checkState=e.checkArgument=e.isNotNil=e.isNil=void 0,Object.defineProperty(e,"isNil",{enumerable:!0,get:function(){return l.isNil}}),Object.defineProperty(e,"isNotNil",{enumerable:!0,get:function(){return l.isNotNil}}),Object.defineProperty(e,"checkArgument",{enumerable:!0,get:function(){return l.checkArgument}}),Object.defineProperty(e,"checkState",{enumerable:!0,get:function(){return l.checkState}}),Object.defineProperty(e,"checkNotNil",{enumerable:!0,get:function(){return l.checkNotNil}}),Object.defineProperty(e,"getValueOrDefault",{enumerable:!0,get:function(){return l.getValueOrDefault}}),Object.defineProperty(e,"checkWithKey",{enumerable:!0,get:function(){return l.checkWithKey}}),Object.defineProperty(e,"checkNumber",{enumerable:!0,get:function(){return l.checkNumber}}),Object.defineProperty(e,"checkString",{enumerable:!0,get:function(){return l.checkString}}),Object.defineProperty(e,"checkArray",{enumerable:!0,get:function(){return l.checkArray}}),Object.defineProperty(e,"checkBoolean",{enumerable:!0,get:function(){return l.checkBoolean}}),Object.defineProperty(e,"isStringEmpty",{enumerable:!0,get:function(){return l.isStringEmpty}}),Object.defineProperty(e,"isValidEmail",{enumerable:!0,get:function(){return l.isValidEmail}}),Object.defineProperty(e,"isEnumMember",{enumerable:!0,get:function(){return l.isEnumMember}})}));function h(){var t=window;return d.isNotNil(t.ApplePaySession)&&t.ApplePaySession.canMakePayments()}var p,f,m={emails:["user@email.com","$replace_with_email_of_current_use","replace_with_email_of_current_use","$user_email"],userIds:["some_user_id"],authTokens:["","{YOUR_PROFITWELL_TOKEN_HERE}","YOUR_PROFITWELL_TOKEN_HERE","PUBLIC_API_TOKEN_HERE"]};!function(t){t.anonymousId="__pw-aid",t.testingKey="__pw-test"}(p||(p={})),function(t){t.anonymousId="anonymous_id",t.docReferrer="doc_referrer"}(f||(f={}));var y,g,v;!function(t){t.dunning="dunning",t.extendTrial="extend_trial",t.planUpgrade="plan_upgrade",t.termOptimization="term_optimization",t.reactivation="reactivation",t.reactivationUnsubscribe="reactivation_unsubscribe",t.planUpgradeUnsubscribe="plan_upgrade_unsubscribe",t.updateCard="update_card"}(y||(y={})),function(t){t.accepted="accepted",t.rejected="rejected",t.notOffered="not_offered",t.error="error"}(g||(g={})),function(t){t.error="error",t.aborted="aborted",t.chose_to_cancel="chose_to_cancel",t.retained="retained"}(v||(v={}));var b=function(t){function r(e,r){void 0===r&&(r="Detail not available");var n=t.call(this,e.statusText+" (status: "+e.status+", url: "+e.url+") - "+r+".")||this;return n.response=e,n.detail=r,n.name="FetchError",n}return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}(r,t),r}(Error),w=function(){function t(t){this.credentials=t}return t.prototype.get=function(t,e){return void 0!==e&&(t=t+"?"+this.encodeURLParams(e)),this.request(t,{method:"GET"})},t.prototype.postUrlEncoded=function(t,e){var r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}};return void 0!==e&&(r.body=this.encodeURLParams(e)),this.request(t,r)},t.prototype.postJson=function(t,e){var r={method:"POST",headers:{"Content-Type":"application/json"}};return void 0!==e&&(r.body=JSON.stringify(e)),this.request(t,r)},t.prototype.request=function(t,e){return n(this,void 0,void 0,(function(){var r,n;return i(this,(function(i){switch(i.label){case 0:return this.addAuthorizationHeader(e),[4,fetch(t,e)];case 1:return(r=i.sent()).ok?[3,3]:[4,this.parseErrorDetailFromResponse(r)];case 2:throw n=i.sent(),new b(r,n);case 3:return[2,this.parseSuccessfulResponse(r)]}}))}))},t.prototype.parseErrorDetailFromResponse=function(t){return n(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,t.json()];case 1:return[2,e.sent().detail];case 2:return e.sent(),[2,void 0];case 3:return[2]}}))}))},t.prototype.parseSuccessfulResponse=function(t){var e;return(null!==(e=t.headers.get("Content-Type"))&&void 0!==e?e:"").includes("json")?t.json():t.text()},t.prototype.addAuthorizationHeader=function(t){this.credentials.isAuthTokenValid()&&(t.headers=r(r({},t.headers),{Authorization:this.credentials.getAuthToken()}))},t.prototype.encodeURLParams=function(t){return new URLSearchParams(t).toString()},t}();function S(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]}var U=function(){function t(t,e,r,o,s,a,u,c,l,d,h){var p=this;this.urlBuilder=t,this.credentials=e,this.requests=r,this.customerIdentity=o,this.urlTracker=s,this.anonymousTracker=a,this.urlChangeListener=u,this.widgetService=c,this.customStyles=l,this.notificationFetcher=d,this.messageService=h,this.isAlreadyStarted=!1,this.onPaymentRecoveryCallback=S,this.maybeFetchNotificationAndTrackCurrentUrl=function(){return n(p,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return this.hasAnyPWQueryParam()?[2]:this.urlTracker.maybeSetCurrentUrlAsTracked()?[4,this._fetchNotificationAndTrackCurrentUrl()]:[2];case 1:return(t=e.sent()).isEmpty||this.widgetService.loadSameOriginIFrame(t.data),[2]}}))}))}}return t.prototype.dump=function(){return{retain_url:this.urlBuilder.getRetainUrl(),sensing_url:this.urlBuilder.getSensingUrl(),is_url_change_tracking_enabled:this.urlChangeListener.isEnabled,is_already_started:this.isAlreadyStarted,auth_token:this.credentials.getAuthToken(),customer_credentials:this.getCustomerParamsWithAnonymousId()}},t.prototype.auth_token=function(t){return this.setAuthToken(t),t},t.prototype.pw_url=function(t){this.urlBuilder.setRetainUrl(t),this.urlBuilder.setSensingUrl(t)},t.prototype.user_email=function(t){return this.customerIdentity.setEmail(t),this.urlTracker.reset(),this.triggerUserRequiredActions(),t},t.prototype.user_id=function(t){return this.setUserId(t),t},t.prototype.user_stripe_id=function(t){return this.setUserId(t),t},t.prototype.on_load=function(){this.hasDunningQueryParamFromEmail()?this.loadDunningFromEmailLink():this.hasDunningQueryParamFromSms()?this.loadDunningFromSmsLink():this.hasEncodedPWQueryParam()?this.loadActivityOrPreview():this.hasAdHocQueryParams()&&this.loadAdHocActivity()},t.prototype.start=function(t){this.checkStartRunsOnce()&&(this.execStartCommands(t),this.shouldTrackCustomerAsAnonymous()&&this.anonymousTracker.trackAnonymousCustomer())},t.prototype.events=function(t){this.onPaymentRecoveryCallback=t.on_payment_recovered},t.prototype.payment_recovered=function(){try{this.onPaymentRecoveryCallback()}catch(t){console.warn("Something went wrong calling the payment recovered event callback")}},t.prototype.send_error=function(t){},t.prototype.get_param=function(t){var e=window.location.href,r=t.replace(/[\[\]]/g,"\\$&"),n=new RegExp("[?&]"+r+"(=([^&#]*)|&|#|$)").exec(e);if(d.isNil(n))return null;var i=n[2];return d.isNil(i)||""===i?"":decodeURIComponent(i.replace(/\+/g," "))},t.prototype.cq_get=function(){this.maybeFetchNotificationAndTrackCurrentUrl()},t.prototype.cq_snooze=function(t){this.postNotificationCommand({action:"snooze",uuid:t})},t.prototype.cq_dismiss=function(t){this.postNotificationCommand({action:"dismiss",uuid:t})},t.prototype.cq_resolve=function(t,e,r){return n(this,void 0,void 0,(function(){var n,o;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.postNotificationCommand({action:"resolve",uuid:t,data:JSON.stringify(e)})];case 1:return n=i.sent(),[3,3];case 2:if((o=i.sent())instanceof b)return r(o.detail),[2];throw o;case 3:return r(n),[2]}}))}))},t.prototype.cq_demo=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n(this,void 0,void 0,(function(){var e,n;return i(this,(function(i){switch(i.label){case 0:return e=r(r({params:t.join(",")},this.customStyles.toParams()),{is_apple_pay_supported:h()}),[4,this.requests.get(this.getCqDemoUrl(t[0]),e)];case 1:return n=i.sent(),this.widgetService.loadSameOriginIFrame(n),[2]}}))}))},t.prototype.getCqDemoUrl=function(t){return"cancellation_flow"===t?this.urlBuilder.buildPreviewCancellationFlowUrl():this.urlBuilder.buildNotificationDemoUrl()},t.prototype.url_tracking=function(t){t||this.urlChangeListener.disable()},t.prototype.useFullScreenWidget=function(){this.widgetService.showFullScreen()},t.prototype.useNotificationWidget=function(t){void 0===t&&(t="350px"),this.widgetService.showNotification(t)},t.prototype.disposeWidget=function(){this.widgetService.hide()},t.prototype.show_cc_form=function(t){return n(this,void 0,void 0,(function(){var e,n,o;return i(this,(function(i){switch(i.label){case 0:return e=this.urlBuilder.buildCreditCardFormUrl(),n=r(r({},this.getCustomerParams()),this.customStyles.toParams()),[4,this.requests.get(e,n)];case 1:return o=i.sent(),void 0!==t&&this.messageService.addOneTimeListener("creditCardSubmitted",t),this.widgetService.loadSameOriginIFrame(o,t),[2]}}))}))},t.prototype.confirmPlanUpgrade=function(t,e,r){return n(this,void 0,void 0,(function(){var n,o,s;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),n=this.urlBuilder.buildTermOptimizationConfirmUpgradeUrl(t),[4,this.requests.postUrlEncoded(n)];case 1:return o=i.sent(),e(JSON.stringify(o)),[3,3];case 2:return s=i.sent(),r(s),[3,3];case 3:return[2]}}))}))},t.prototype.digestScriptDataAttributes=function(){var t=document.getElementById("profitwell-js");null!==t&&this.digestAuthDataAttribute(t)},t.prototype.styles=function(t){this.customStyles.setCustomStyles(t)},t.prototype.on_cancellation=function(){return n(this,void 0,void 0,(function(){var t,e,n,o=this;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),t=this.urlBuilder.buildCreateSalvageOfferUrl(this.customStyles.toQueryString()),[4,this.requests.postUrlEncoded(t,r({},this.getCustomerParams()))];case 1:return"error"===(e=i.sent()).status?[2,{status:g.error,details:"Server error"}]:e.data.has_offer?(n=e.data,[2,new Promise((function(t){o.widgetService.loadSameOriginIFrame(n.rendered_widget),o.messageService.addOneTimeListener("salvageOfferComplete",t)}))]):[2,{status:g.notOffered,details:e.data.reason}];case 2:return i.sent(),[2,{status:g.error,details:"Server error"}];case 3:return[2]}}))}))},t.prototype.init_cancellation_flow=function(t){return void 0===t&&(t={}),n(this,void 0,void 0,(function(){var e,n,o,s=this;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),e=this.urlBuilder.buildCancellationFlowUrl(),[4,this.requests.get(e,r(r(r({},this.getCustomerParams()),t),this.customStyles.toParams()))];case 1:return"error"===(n=i.sent()).status?[2,{status:v.error,details:"Server error"}]:n.data.success?(o=n.data,[2,new Promise((function(t){s.widgetService.loadSameOriginIFrame(o.widget),s.messageService.addOneTimeListener("cancellationFlowComplete",t)}))]):[2,{status:v.error,details:n.data.reason}];case 2:return i.sent(),[2,{status:v.error,details:"Server error"}];case 3:return[2]}}))}))},t.prototype.setAuthToken=function(t){this.credentials.setAuthToken(t)&&this.urlTracker.reset()},t.prototype.checkStartRunsOnce=function(){return this.isAlreadyStarted?(console.warn("Discarded second start call: profitwell can't be started twice."),!1):(this.isAlreadyStarted=!0,!0)},t.prototype.execStartCommands=function(t){for(var e=t,r=0,n=Object.keys(e);r<n.length;r++){var i=n[r],o=e[i];this[i](o)}},t.prototype.shouldTrackCustomerAsAnonymous=function(){return this.credentials.isAuthTokenValid()&&!this.hasDunningQueryParamFromEmail()&&!this.customerIdentity.isValid()&&!this.hasDoNotTrackHeader()},t.prototype.hasDoNotTrackHeader=function(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack},t.prototype._fetchNotificationAndTrackCurrentUrl=function(){return n(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.notificationFetcher.fetchNotificationAndTrackCurrentUrl(r(r(r({},this.getCustomerParamsWithAnonymousId()),this.customStyles.toParams()),{is_apple_pay_supported:h()}))];case 1:return[2,e.sent()];case 2:return t=e.sent(),[2,Promise.reject(t)];case 3:return[2]}}))}))},t.prototype.getCustomerParamsWithAnonymousId=function(){var t=this.getCustomerParams(),e=this.anonymousTracker.getAnonymousId();return d.isNil(e)?t:r(r({},t),{anonymous_id:e})},t.prototype.postNotificationCommand=function(t){return this.requests.postUrlEncoded(this.urlBuilder.buildNotificationUrl(),r(r(r({},t),this.getCustomerParams()),{is_apple_pay_supported:h()}))},t.prototype.loadDunning=function(t){return n(this,void 0,void 0,(function(){var e;return i(this,(function(r){switch(r.label){case 0:return[4,this.requests.get(t)];case 1:return e=r.sent(),this.widgetService.loadSameOriginIFrame(e),[2]}}))}))},t.prototype.loadDunningPreview=function(){this.cq_demo("dunning")},t.prototype.loadDunningFromEmailLink=function(){var t=this.getDunningQueryParam();if(null===t)throw new Error("Cannot build the dunning form URL without any params");if(this.isDunningDemoQueryParam(t))this.loadDunningPreview();else{var e=this.get_param("at")||"",r=this.get_param("term_optimization_default")||"false",n=this.urlBuilder.buildDunningEmailFormUrl(t,e,r,this.customStyles.toQueryString(),h());this.loadDunning(n)}},t.prototype.loadDunningFromSmsLink=function(){var t=this.getPWQueryParam();if(null===t)throw new Error("Cannot build the dunning form URL without any params");if(this.isDunningDemoQueryParam(t))this.loadDunningPreview();else{var e=this.urlBuilder.buildDunningSmsFormUrl(t,this.customStyles.toQueryString(),h());this.loadDunning(e)}},t.prototype.loadDunningFromEncodedEmailLink=function(t){var e=t.term_optimization_default||!1,r=this.urlBuilder.buildDunningEmailFormUrl(t.uuid,t.email_number.toString(),e.toString(),this.customStyles.toQueryString(),h());this.loadDunning(r)},t.prototype.getCustomerParams=function(){return this.customerIdentity.toParams()},t.prototype.triggerUserRequiredActions=function(){var t=this;setTimeout((function(){t.maybeFetchNotificationAndTrackCurrentUrl(),t.urlChangeListener.initialize((function(){t.urlTracker.maybeTrackCurrentUrl()}))}),0)},t.prototype.setUserId=function(t){this.customerIdentity.setUserId(t),this.urlTracker.reset(),this.triggerUserRequiredActions()},t.prototype.hasAnyPWQueryParam=function(){return this.hasDunningQueryParamFromEmail()||null!==this.getPWQueryParam()||this.hasAdHocQueryParams()},t.prototype.hasDunningQueryParamFromEmail=function(){return null!==this.getDunningQueryParam()},t.prototype.getDunningQueryParam=function(){return this.get_param("__pw_iic")},t.prototype.isDunningDemoQueryParam=function(t){return t.startsWith("tf-")},t.prototype.hasEncodedPWQueryParam=function(){return null!==this.getPWQueryParam()&&!this.hasDunningQueryParamFromSms()},t.prototype.hasAdHocQueryParams=function(){return d.isNotNil(this.getAdHocActivityTypeQueryParam())&&d.isNotNil(this.getAdHocCustomerIdQueryParam())},t.prototype.hasDunningQueryParamFromSms=function(){var t=this.getPWQueryParam();return null!==t&&t.length<20},t.prototype.getPWQueryParam=function(){return this.get_param("__pw")},t.prototype.getAdHocActivityTypeQueryParam=function(){return this.get_param("__pw_type")},t.prototype.getAdHocCustomerIdQueryParam=function(){return this.get_param("__pw_customer_id")},t.prototype.getActivityOrPreviewPayload=function(){var t=this.getPWQueryParam();return this.assertEncodedPWQueryParamCanBeParsed(),JSON.parse(atob(decodeURIComponent(t)))},t.prototype.assertEncodedPWQueryParamCanBeParsed=function(){if(!this.hasEncodedPWQueryParam())throw new Error("Cannot parse the activity payload without params");if(!window.atob)throw new Error("This link doesn't work on this browser. Please, try a different one.")},t.prototype.loadActivityOrPreview=function(){var t=this.getActivityOrPreviewPayload();!function(t){return"preview"in t&&t.preview}(t)?this.loadActivity(t):this.loadPreview(t)},t.prototype.loadPreview=function(t){var e=d.getValueOrDefault(t.options,[]);this.cq_demo.apply(this,o([t.type],e))},t.prototype.loadActivity=function(t){var e=t.type,r=t.uuid;switch(e){case y.dunning:return void this.loadDunningFromEncodedEmailLink(t);case y.planUpgrade:case y.termOptimization:return void this.loadTermOptimization(r);case y.reactivation:return void this.loadReactivation(r);case y.extendTrial:return void this.loadExtendTrial(r);case y.reactivationUnsubscribe:return void this.loadReactivationUnsubscribe(r);case y.planUpgradeUnsubscribe:return void this.loadPlanUpgradeUnsubscribe(r);case y.updateCard:return void c.fail('Widget goal "'+e+'" only supported for ad-hoc links.');default:c.assertUnreachable("Invalid widget goal value",e)}},t.prototype.loadAdHocActivity=function(){var t=this.getAdHocActivityTypeQueryParam(),e=this.getAdHocCustomerIdQueryParam();switch(d.checkString(e),t){case y.termOptimization:return void this.loadTermOptimizationAdHoc(e);case y.reactivation:return void this.loadReactivationAdHoc(e);case y.updateCard:return void this.loadUpdateCardAdHoc(e);default:c.fail("Unknown ad hoc activity type: "+t)}},t.prototype.loadUpdateCardAdHoc=function(t){return n(this,void 0,void 0,(function(){var e,n,o;return i(this,(function(i){switch(i.label){case 0:return e=this.urlBuilder.buildCreditCardFormUrl(),n=r(r({},this.customStyles.toParams()),{user_id:t}),[4,this.requests.get(e,n)];case 1:return o=i.sent(),this.widgetService.loadSameOriginIFrame(o),[2]}}))}))},t.prototype.loadTermOptimization=function(t){return n(this,void 0,void 0,(function(){var e,r,n;return i(this,(function(i){switch(i.label){case 0:return e=this.customStyles.toQueryString(),r=this.urlBuilder.buildTermOptimizationUrl(t,e),[4,this.requests.postUrlEncoded(r)];case 1:return n=i.sent(),this.widgetService.loadSameOriginIFrame(n),[2]}}))}))},t.prototype.loadTermOptimizationAdHoc=function(t){return n(this,void 0,void 0,(function(){var e,r,n;return i(this,(function(i){switch(i.label){case 0:return e=this.customStyles.toQueryString(),r=this.urlBuilder.buildTermOptimizationAdHocUrl(t,e),[4,this.requests.postUrlEncoded(r)];case 1:return n=i.sent(),this.widgetService.loadSameOriginIFrame(n),[2]}}))}))},t.prototype.loadPlanUpgradeUnsubscribe=function(t){return n(this,void 0,void 0,(function(){var e,r,n;return i(this,(function(i){switch(i.label){case 0:return e=this.customStyles.toQueryString(),r=this.urlBuilder.buildPlanUpgradeUnsubscribe(t,e),[4,this.requests.postUrlEncoded(r)];case 1:return n=i.sent(),this.widgetService.loadSameOriginIFrame(n),[2]}}))}))},t.prototype.loadReactivation=function(t){return n(this,void 0,void 0,(function(){var e,r;return i(this,(function(n){switch(n.label){case 0:return e=this.urlBuilder.buildReactivationUrl(t),[4,this.requests.get(e,this.customStyles.toParams())];case 1:return r=n.sent(),this.widgetService.loadSameOriginIFrame(r),[2]}}))}))},t.prototype.loadReactivationAdHoc=function(t){return n(this,void 0,void 0,(function(){var e,r;return i(this,(function(n){switch(n.label){case 0:return e=this.urlBuilder.buildReactivationAdHocUrl(t),[4,this.requests.get(e,this.customStyles.toParams())];case 1:return r=n.sent(),this.widgetService.loadSameOriginIFrame(r),[2]}}))}))},t.prototype.loadReactivationUnsubscribe=function(t){return n(this,void 0,void 0,(function(){var e,r,n;return i(this,(function(i){switch(i.label){case 0:return e=this.customStyles.toQueryString(),r=this.urlBuilder.buildReactivationUnsubscribe(t,e),[4,this.requests.postUrlEncoded(r)];case 1:return n=i.sent(),this.widgetService.loadSameOriginIFrame(n),[2]}}))}))},t.prototype.loadExtendTrial=function(t){return n(this,void 0,void 0,(function(){var e,r,n;return i(this,(function(i){switch(i.label){case 0:return e=this.customStyles.toQueryString(),r=this.urlBuilder.buildExtendTrialUrl(t,e),[4,this.requests.postUrlEncoded(r)];case 1:return n=i.sent(),this.widgetService.loadSameOriginIFrame(n),[2]}}))}))},t.prototype.digestAuthDataAttribute=function(t){var e=t.getAttribute("data-pw-auth");e&&this.setAuthToken(e)},t}(),_=function(){function t(){this.authToken=""}return t.prototype.setAuthToken=function(t){return this.isTokenValid(t)?(this.authToken=t,!0):(console.warn('Invalid token "'+t+'" attempted to be set'),!1)},t.prototype.getAuthToken=function(){return this.authToken},t.prototype.isAuthTokenValid=function(){return this.isTokenValid(this.authToken)},t.prototype.isTokenValid=function(t){return!m.authTokens.includes(t.toUpperCase())},t}(),P=function(){function t(){this.isEmailValid=!1,this.isUserIdValid=!1}return t.prototype.setEmail=function(t){this.email=t,this.isEmailValid=this.validateEmail()},t.prototype.setUserId=function(t){this.userId=t,this.isUserIdValid=this.validateUserId()},t.prototype.isValid=function(){return this.isEmailValid||this.isUserIdValid},t.prototype.toParams=function(){var t={};return this.isEmailValid&&(t.user_email=this.email),this.isUserIdValid&&(t.user_id=this.userId),t},t.prototype.validateEmail=function(){if(!this.email)return!1;var t=this.email.toLowerCase();return m.emails.every((function(e){return e!==t}))},t.prototype.validateUserId=function(){if(!this.userId)return!1;var t=String(this.userId).toLowerCase();return m.userIds.every((function(e){return e!==t}))},t}(),k=function(){function t(){this.customStyles={}}return t.prototype.setCustomStyles=function(t){this.customStyles=t},t.prototype.getCustomStyles=function(){return this.customStyles},t.prototype.toString=function(){return JSON.stringify(this.customStyles)},t.prototype.toQueryString=function(){return encodeURIComponent(this.toString())},t.prototype.toParams=function(){return{custom_styles:this.toString()}},t}();function E(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=this[t];if("function"==typeof n)return n.apply(this,e)}var C=function(){function t(t){this.window=t}return t.prototype.addOneTimeListener=function(t,e){var r=this,n=function(i){var o=i.data;i.origin===r.window.origin&&d.isNotNil(o)&&o.type===t&&(r.window.removeEventListener("message",n),e(o.payload))};this.window.addEventListener("message",n)},t}(),A=function(){function t(t,e){this.urlBuilder=t,this.requests=e}return t.prototype.fetchNotificationAndTrackCurrentUrl=function(t){return n(this,void 0,void 0,(function(){var e,r;return i(this,(function(n){switch(n.label){case 0:return e=this.urlBuilder.buildNotificationUrl(),[4,this.requests.get(e,t)];case 1:return""===(r=n.sent())?[2,{isEmpty:!0}]:[2,{isEmpty:!1,data:r}]}}))}))},t}(),O=function(){function t(t,e){this.retainUrl=t,this.sensingUrl=e}return t.buildSingleDomain=function(){return new t("https://www2.profitwell.com/","https://www2.profitwell.com/")},t.buildSplitDomains=function(){return new t("https://retain-api.profitwell.com/","https://api.profitwell-events.com/")},t.prototype.setRetainUrl=function(t){this.retainUrl=this.ensureTrailingSlash(t)},t.prototype.setSensingUrl=function(t){this.sensingUrl=this.ensureTrailingSlash(t)},t.prototype.getRetainUrl=function(){return this.retainUrl},t.prototype.getSensingUrl=function(){return this.sensingUrl},t.prototype.buildCreditCardFormUrl=function(){return this.buildDotJsUrl("generic-update-card/")},t.prototype.buildDunningEmailFormUrl=function(t,e,r,n,i){var o="?at="+e+"&custom_url=true&term_optimization_default="+r+"&is_apple_pay_supported="+i;return this.buildDotJsUrl("pw/update-card/"+t)+"/"+this.addCustomStyles(o,n)},t.prototype.buildDunningSmsFormUrl=function(t,e,r){var n="?custom_url=true&is_apple_pay_supported="+r;return this.buildDotJsUrl("pw/update-card-sms/"+t)+"/"+this.addCustomStyles(n,e)},t.prototype.buildTermOptimizationUrl=function(t,e){var r=this.buildDotJsUrl("term-optimization/"+t+"/");return this.addCustomStyles(r,e)},t.prototype.buildTermOptimizationAdHocUrl=function(t,e){var r=this.buildDotJsUrl("term-optimization/ad-hoc/"+t+"/");return this.addCustomStyles(r,e)},t.prototype.buildTermOptimizationConfirmUpgradeUrl=function(t){return this.buildDotJsUrl("term-optimization/confirm-upgrade/"+t+"/")},t.prototype.buildPlanUpgradeUnsubscribe=function(t,e){var r=this.buildDotJsUrl("term-optimization/unsubscribe/"+t+"/");return this.addCustomStyles(r,e)},t.prototype.buildReactivationUrl=function(t){return this.buildDotJsUrl("reactivation/"+t+"/")},t.prototype.buildReactivationAdHocUrl=function(t){return this.buildDotJsUrl("reactivation-ad-hoc/"+t+"/")},t.prototype.buildReactivationUnsubscribe=function(t,e){var r=this.buildDotJsUrl("unsubscribe-reactivation/"+t+"/");return this.addCustomStyles(r,e)},t.prototype.buildExtendTrialUrl=function(t,e){var r=this.buildDotJsUrl("extend-trial/"+t+"/");return this.addCustomStyles(r,e)},t.prototype.buildNotificationUrl=function(){return this.buildDotJsV1Url("quests/customer/")},t.prototype.buildHasOpenNotificationsUrl=function(){return this.buildDotJsV1Url("customer/has-notifications/")},t.prototype.buildFetchActiveNotificationUrl=function(){return this.buildDotJsV1Url("customer/active-notification/")},t.prototype.buildTrackingUrl=function(){return this.buildSensingUrl("customer/event/")},t.prototype.buildTrackAnonymousCustomerUrl=function(){return this.buildDotJsV1Url("anonymous/event/")},t.prototype.buildNotificationDemoUrl=function(){return this.buildDotJsV1Url("quests/demo/")},t.prototype.buildCreateSalvageOfferUrl=function(t){var e=this.buildDotJsUrl("create-salvage-offer/");return this.addCustomStyles(e,t)},t.prototype.buildPreviewCancellationFlowUrl=function(){return this.buildDotJsUrl("cancellation-flow/preview/")},t.prototype.buildCancellationFlowUrl=function(){return this.buildDotJsUrl("cancellation-flow/")},t.prototype.ensureTrailingSlash=function(t){return"/"!==t.substr(-1)?t+"/":t},t.prototype.buildDotJsUrl=function(t){return this.retainUrl+"dotjs/"+t},t.prototype.buildDotJsV1Url=function(t){return this.retainUrl+"dotjs/v1/"+t},t.prototype.buildSensingUrl=function(t){return this.sensingUrl+"dotjs/v1/"+t},t.prototype.addCustomStyles=function(t,e){var r=t.includes("?")?"&":"?";return""+t+r+"custom_styles="+e},t}(),T=function(){function t(){this.isEnabled=!1}return t.prototype.initialize=function(){},t.prototype.disable=function(){},t}(),I=function(){function t(t,e,r){this.requests=t,this.urlBuilder=e,this.customerIdentity=r,this.emptyUrl="",this.trackedUrl=this.emptyUrl}return t.prototype.maybeTrackCurrentUrl=function(){this.maybeSetCurrentUrlAsTracked()&&this.trackCurrentUrl()},t.prototype.maybeSetCurrentUrlAsTracked=function(){var t=window.location.href;return!(!this.customerIdentity.isValid()||this.trackedUrl===t)&&(this.trackedUrl=t,!0)},t.prototype.trackCurrentUrl=function(){var t,e=r(((t={})[f.docReferrer]=document.referrer,t),this.customerIdentity.toParams());this.requests.postJson(this.urlBuilder.buildTrackingUrl(),e)},t.prototype.reset=function(){this.trackedUrl=this.emptyUrl},t}(),N=function(){function t(){this.iFrameId="__pw_frame"}return t.prototype.loadSameOriginIFrame=function(t,e){var r=this.createContentIFrame(),n=d.checkNotNil(r.contentDocument,"Error creating Profitwell iframe");void 0!==e&&r.addEventListener("load",(function(){var t=n.querySelector(".__pw_dotjs_content");null!==t&&t.addEventListener("__pw-cc-form-callback",e)}));var i=document.getElementById("profitwell-js");if(null!==i){var o=i.nonce||i.getAttribute("nonce")||"";t=t.replace(/verysecurenonce/g,o)}n.open(),n.write(t),n.close()},t.prototype.showFullScreen=function(){this.showIFrame({left:0,width:"100%",height:"100%"})},t.prototype.showNotification=function(t){var e={right:0,width:"390px",height:t};this.showIFrame(e)},t.prototype.hide=function(){var t=this.getContentIFrame();null!==t&&(t.style.display="none")},t.prototype.delete=function(){var t=this.getContentIFrame();null!==t&&t.remove()},t.prototype.createContentIFrame=function(){this.delete();var t=document.createElement("iframe");return t.id=this.iFrameId,t.style.border="0",t.style.width="0",t.style.height="0",t.allow="payment",document.body.appendChild(t),t},t.prototype.getBaseIFrameCSS=function(){return{"z-index":"2147483647","color-scheme":"normal",position:"fixed",top:0,border:0}},t.prototype.getContentIFrame=function(){return document.getElementById(this.iFrameId)},t.prototype.showIFrame=function(t){var e=r(r(r({},this.getBaseIFrameCSS()),t),{display:"unset"}),n=this.getContentIFrame();if(null!==n)for(var i in e)n.style.setProperty(i,e[i])},t}(),D=O.buildSingleDomain(),F=new _,R=new w(F),j=new P;!function(t){var e=window;if(e.profitwell.isLoaded)e.profitwell("digestScriptDataAttributes");else{t.digestScriptDataAttributes();for(var r=E.bind(t),n=window.profitwell.q||[];n.length>0;){var i=Array.from(n.shift()),s=i[0],a=i.slice(1);E.call.apply(E,o([t,s],a))}e.profitwell=r,r.isLoaded=!0,t.on_load()}}(new U(D,F,R,j,new I(R,D,j),new t,new T,new N,new k,new A(D,R),new C(window)))}();

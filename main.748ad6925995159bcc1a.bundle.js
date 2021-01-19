/*! For license information please see main.748ad6925995159bcc1a.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1726:function(module,exports,__webpack_require__){"use strict";__webpack_require__(72).addons.setConfig({refs:{angular:{id:"angular",title:"Angular",url:"https://web-components.carbondesignsystem.com/angular",type:"server-checked"},react:{id:"react",title:"React",url:"https://web-components.carbondesignsystem.com/react",type:"server-checked"},vue:{id:"vue",title:"Vue",url:"https://web-components.carbondesignsystem.com/vue",type:"server-checked"}}})},1732:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),public_api=__webpack_require__(72),public_api_default=__webpack_require__.n(public_api),prop_types=(__webpack_require__(2),__webpack_require__(8),__webpack_require__(10),__webpack_require__(16),__webpack_require__(9),__webpack_require__(5),__webpack_require__(7),__webpack_require__(11),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types),dist=__webpack_require__(26),CURRENT_THEME="".concat("carbon-theme","/current"),PANEL_ID="".concat("carbon-theme","/panel");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Panel_Panel=function Panel(_ref){var api=_ref.api,active=_ref.active,_useState2=_slicedToArray(Object(react.useState)("white"),2),currentTheme=_useState2[0],setCurrentTheme=_useState2[1],handleChange=Object(react.useCallback)((function(event){var value=event.target.value;setCurrentTheme(value),api.getChannel().emit(CURRENT_THEME,value)}),[api]);return active&&react_default.a.createElement(dist.Form,{translate:"yes"},react_default.a.createElement(dist.Form.Field,{label:"Select Carbon theme:"},react_default.a.createElement(dist.Form.Select,{translate:"yes",name:"carbon-theme",value:currentTheme,onChange:handleChange,size:"flex"},react_default.a.createElement("option",{key:"white",value:"white"},"white"),react_default.a.createElement("option",{key:"g10",value:"g10"},"g10"),react_default.a.createElement("option",{key:"g90",value:"g90"},"g90"),react_default.a.createElement("option",{key:"g100",value:"g100"},"g100"))))};Panel_Panel.propTypes={api:prop_types_default.a.shape({getChannel:prop_types_default.a.func}).isRequired,active:prop_types_default.a.bool.isRequired};var components_Panel=Panel_Panel;public_api_default.a.register("carbon-theme",(function(api){public_api_default.a.addPanel(PANEL_ID,{title:"Carbon theme",render:function render(_ref){var active=_ref.active,key=_ref.key;return react_default.a.createElement(components_Panel,{api:api,key:key,active:Boolean(active)})}})}))},708:function(module,exports,__webpack_require__){__webpack_require__(709),__webpack_require__(924),__webpack_require__(1666),__webpack_require__(1698),__webpack_require__(1700),__webpack_require__(1721),__webpack_require__(1732),module.exports=__webpack_require__(1726)},775:function(module,exports){}},[[708,1,2]]]);
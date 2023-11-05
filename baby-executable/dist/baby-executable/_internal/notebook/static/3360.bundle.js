"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3360],{63360:(t,e,s)=>{s.r(e),s.d(e,{IJSONSettingEditorTracker:()=>W.g,ISettingEditorTracker:()=>W.O,JsonSettingEditor:()=>M,SettingsEditor:()=>S});var i=s(56165),r=s(49255),n=s(59361),a=s(81997),o=s(9267),l=s(78156),d=s.n(l),h=s(33625);class c extends i.ReactWidget{constructor(t){var e;super(),this._changed=new a.Signal(this),this._handleSelectSignal=new a.Signal(this),this._updateFilterSignal=new a.Signal(this),this._allPlugins=[],this._settings={},this._scrollTop=0,this._selection="",this.registry=t.registry,this.translator=t.translator||r.nullTranslator,this.addClass("jp-PluginList"),this._confirm=t.confirm,this.registry.pluginChanged.connect((()=>{this.update()}),this),this.mapPlugins=this.mapPlugins.bind(this),this.setFilter=this.setFilter.bind(this),this.setFilter(t.query?(0,n.updateFilterFunction)(t.query,!1,!1):null),this.setError=this.setError.bind(this),this._evtMousedown=this._evtMousedown.bind(this),this._query=null!==(e=t.query)&&void 0!==e?e:"",this._allPlugins=c.sortPlugins(this.registry).filter((e=>{var s;const{schema:i}=e,r=!0===i["jupyter.lab.setting-deprecated"],n=Object.keys(i.properties||{}).length>0,a=!1!==i.additionalProperties,o=this._confirm||!this._confirm&&!(null!==(s=t.toSkip)&&void 0!==s?s:[]).includes(e.id);return!r&&o&&(n||a)})),(async()=>{for(const t of this._allPlugins){const e=await this.registry.load(t.id);this._settings[t.id]=e}this.update()})(),this._errors={}}get changed(){return this._changed}get scrollTop(){var t;return null===(t=this.node.querySelector("ul"))||void 0===t?void 0:t.scrollTop}get hasErrors(){for(const t in this._errors)if(this._errors[t])return!0;return!1}get filter(){return this._filter}get selection(){return this._selection}set selection(t){this._selection=t,this.update()}get updateFilterSignal(){return this._updateFilterSignal}get handleSelectSignal(){return this._handleSelectSignal}onUpdateRequest(t){const e=this.node.querySelector("ul");e&&void 0!==this._scrollTop&&(e.scrollTop=this._scrollTop),super.onUpdateRequest(t)}_evtMousedown(t){const e=t.currentTarget.getAttribute("data-id");e&&(this._confirm?this._confirm(e).then((()=>{this.selection=e,this._changed.emit(void 0),this.update()})).catch((()=>{})):(this._scrollTop=this.scrollTop,this._selection=e,this._handleSelectSignal.emit(e),this._changed.emit(void 0),this.update()))}getHint(t,e,s){let i=s.data.user[t];if(i||(i=s.data.composite[t]),i||(i=s.schema[t]),!i){const{properties:s}=e.schema;i=s&&s[t]&&s[t].default}return"string"==typeof i?i:""}getFilterString(t,e,s,i){var r;if(i&&s&&(i=i.replace("#/definitions/",""),e=null!==(r=s[i])&&void 0!==r?r:{}),e.properties)e=e.properties;else{if(!e.items)return[];e=e.items}return e.$ref?this.getFilterString(t,e,s,e.$ref):0===Object.keys(e).length?[]:Object.keys(e).reduce(((i,r)=>{var n,a;const o=e[r];if(!o){if(t(null!==(n=e.title)&&void 0!==n?n:""))return e.title;if(t(r))return r}return t(null!==(a=o.title)&&void 0!==a?a:"")&&i.push(o.title),t(r)&&i.push(r),i.concat(this.getFilterString(t,o,s,o.$ref)),i}),[])}setFilter(t,e){this._filter=t?e=>{var s,i;return!t||t(null!==(s=e.schema.title)&&void 0!==s?s:"")?null:this.getFilterString(t,null!==(i=e.schema)&&void 0!==i?i:{},e.schema.definitions)}:null,this._query=e,this._updateFilterSignal.emit(this._filter),this.update()}setError(t,e){this._errors[t]!==e?(this._errors[t]=e,this.update()):this._errors[t]=e}mapPlugins(t){var e,s,i,r;const{id:a,schema:o,version:l}=t,c=this.translator.load("jupyterlab"),u="string"==typeof o.title?c._p("schema",o.title):a,p=h.StringExt.matchSumOfSquares(u.toLocaleLowerCase(),null!==(s=null===(e=this._query)||void 0===e?void 0:e.toLocaleLowerCase())&&void 0!==s?s:""),g=h.StringExt.highlight(u,null!==(i=null==p?void 0:p.indices)&&void 0!==i?i:[],(t=>d().createElement("mark",null,t))),_=`${"string"==typeof o.description?c._p("schema",o.description):""}\n${a}\n${l}`,m=this.getHint("jupyter.lab.setting-icon",this.registry,t),v=this.getHint("jupyter.lab.setting-icon-class",this.registry,t),f=this.getHint("jupyter.lab.setting-icon-label",this.registry,t),S=this._filter?null===(r=this._filter(t))||void 0===r?void 0:r.map((t=>{var e,s,i;const r=h.StringExt.matchSumOfSquares(t.toLocaleLowerCase(),null!==(s=null===(e=this._query)||void 0===e?void 0:e.toLocaleLowerCase())&&void 0!==s?s:""),n=h.StringExt.highlight(t,null!==(i=null==r?void 0:r.indices)&&void 0!==i?i:[],(t=>d().createElement("mark",null,t)));return d().createElement("li",{key:`${a}-${t}`}," ",n," ")})):void 0;return d().createElement("div",{onClick:this._evtMousedown,className:`${a===this.selection?"jp-mod-selected jp-PluginList-entry":"jp-PluginList-entry"} ${this._errors[a]?"jp-ErrorPlugin":""}`,"data-id":a,key:a,title:_},d().createElement("div",{className:"jp-PluginList-entry-label",role:"tab"},d().createElement("div",{className:"jp-SelectedIndicator"}),d().createElement(n.LabIcon.resolveReact,{icon:m||(v?void 0:n.settingsIcon),iconClass:(0,n.classes)(v,"jp-Icon"),title:f,tag:"span",stylesheet:"settingsEditor"}),d().createElement("span",{className:"jp-PluginList-entry-label-text"},g)),d().createElement("ul",null,S))}render(){const t=this.translator.load("jupyterlab"),e=this._allPlugins.filter((t=>{if(!this._filter)return!1;const e=this._filter(t);return null===e||e.length>0})),s=e.filter((t=>{var e;return null===(e=this._settings[t.id])||void 0===e?void 0:e.isModified})),i=s.map(this.mapPlugins),r=e.filter((t=>!s.includes(t))).map(this.mapPlugins);return d().createElement("div",{className:"jp-PluginList-wrapper"},d().createElement(n.FilterBox,{updateFilter:this.setFilter,useFuzzyFilter:!1,placeholder:t.__("Search…"),forceRefresh:!1,caseSensitive:!1,initialQuery:this._query}),i.length>0&&d().createElement("div",null,d().createElement("h1",{className:"jp-PluginList-header"},t.__("Modified")),d().createElement("ul",null,i)),r.length>0&&d().createElement("div",null,d().createElement("h1",{className:"jp-PluginList-header"},t.__("Settings")),d().createElement("ul",null,r)),0===i.length&&0===r.length&&d().createElement("p",{className:"jp-PluginList-noResults"},t.__("No items match your search.")))}}!function(t){t.sortPlugins=function(t){return Object.keys(t.plugins).map((e=>t.plugins[e])).sort(((t,e)=>(t.schema.title||t.id).localeCompare(e.schema.title||e.id)))}}(c||(c={}));var u=s(20998),p=s(97934),g=s(89319),_=s.n(g);class m extends d().Component{constructor(t){super(t),this.reset=async t=>{t.stopPropagation();for(const t in this.props.settings.user)await this.props.settings.remove(t);this._formData=this.props.settings.composite,this.setState({isModified:!1})},this._onChange=t=>{this.props.hasError(0!==t.errors.length),this._formData=t.formData,0===t.errors.length&&(this.props.updateDirtyState(!0),this._debouncer.invoke()),this.props.onSelect(this.props.settings.id)};const{settings:e}=t;this._formData=e.composite,this.state={isModified:e.isModified,uiSchema:{},filteredSchema:this.props.settings.schema,formContext:{defaultFormData:this.props.settings.default(),settings:this.props.settings}},this.handleChange=this.handleChange.bind(this),this._debouncer=new p.Debouncer(this.handleChange)}componentDidMount(){this._setUiSchema(),this._setFilteredSchema()}componentDidUpdate(t){this._setUiSchema(t.renderers[t.settings.id]),this._setFilteredSchema(t.filteredValues),t.settings!==this.props.settings&&this.setState({formContext:{settings:this.props.settings,defaultFormData:this.props.settings.default()}})}componentWillUnmount(){this._debouncer.dispose()}handleChange(){!this.props.settings.isModified&&this._formData&&this.props.settings.isDefault(this._formData)?this.props.updateDirtyState(!1):this.props.settings.save(JSON.stringify(this._formData,void 0,4)).then((()=>{this.props.updateDirtyState(!1),this.setState({isModified:this.props.settings.isModified})})).catch((t=>{this.props.updateDirtyState(!1);const e=this.props.translator.load("jupyterlab");(0,i.showErrorMessage)(e.__("Error saving settings."),t)}))}render(){const t=this.props.translator.load("jupyterlab");return d().createElement(d().Fragment,null,d().createElement("div",{className:"jp-SettingsHeader"},d().createElement("h2",{className:"jp-SettingsHeader-title",title:this.props.settings.schema.description},this.props.settings.schema.title),d().createElement("div",{className:"jp-SettingsHeader-buttonbar"},this.state.isModified&&d().createElement(n.Button,{className:"jp-RestoreButton",onClick:this.reset},t.__("Restore to Defaults"))),d().createElement("div",{className:"jp-SettingsHeader-description"},this.props.settings.schema.description)),d().createElement(n.FormComponent,{validator:_(),schema:this.state.filteredSchema,formData:this._getFilteredFormData(this.state.filteredSchema),uiSchema:this.state.uiSchema,fields:this.props.renderers[this.props.settings.id],formContext:this.state.formContext,liveValidate:!0,idPrefix:`jp-SettingsEditor-${this.props.settings.id}`,onChange:this._onChange,translator:this.props.translator}))}_setUiSchema(t){var e;const s=this.props.renderers[this.props.settings.id];if(!u.JSONExt.deepEqual(Object.keys(null!=t?t:{}).sort(),Object.keys(null!=s?s:{}).sort())){const t={};for(const s in this.props.renderers[this.props.settings.id])Object.keys(null!==(e=this.props.settings.schema.properties)&&void 0!==e?e:{}).includes(s)&&(t[s]={"ui:field":s});this.setState({uiSchema:t})}}_setFilteredSchema(t){var e,s,i,r;if(void 0===t||!u.JSONExt.deepEqual(t,this.props.filteredValues)){const t=u.JSONExt.deepCopy(this.props.settings.schema);if(null!==(s=null===(e=this.props.filteredValues)||void 0===e?void 0:e.length)&&void 0!==s&&s)for(const e in t.properties)(null===(i=this.props.filteredValues)||void 0===i?void 0:i.includes(null!==(r=t.properties[e].title)&&void 0!==r?r:e))||delete t.properties[e];this.setState({filteredSchema:t})}}_getFilteredFormData(t){if(!(null==t?void 0:t.properties))return this._formData;const e=u.JSONExt.deepCopy(this._formData);for(const s in e)t.properties[s]||delete e[s];return e}}const v=({translator:t})=>{const e=t.load("jupyterlab");return d().createElement("div",{className:"jp-SettingsEditor-placeholder"},d().createElement("div",{className:"jp-SettingsEditor-placeholderContent"},d().createElement("h3",null,e.__("No Plugin Selected")),d().createElement("p",null,e.__("Select a plugin from the list to view and edit its preferences."))))},f=({settings:t,editorRegistry:e,onSelect:s,handleSelectSignal:i,hasError:r,updateDirtyState:n,updateFilterSignal:a,translator:o,initialFilter:h})=>{const[c,u]=(0,l.useState)(null),[p,g]=(0,l.useState)(h?()=>h:null),_=d().useRef(null),f=d().useRef({});(0,l.useEffect)((()=>{var t;const e=(t,e)=>{g(e?()=>e:null)};a.connect(e);const s=(t,e)=>{u(e)};return null===(t=null==i?void 0:i.connect)||void 0===t||t.call(i,s),()=>{var t;a.disconnect(e),null===(t=null==i?void 0:i.disconnect)||void 0===t||t.call(i,s)}}),[]);const S=d().useCallback(((t,e)=>{if(f.current){f.current[t]=e;for(const t in f.current)if(f.current[t])return void n(!0)}n(!1)}),[f,n]),y=d().useMemo((()=>Object.entries(e.renderers).reduce(((t,[e,s])=>{const i=e.lastIndexOf("."),r=e.substring(0,i),n=e.substring(i+1);return t[r]||(t[r]={}),!t[r][n]&&s.fieldRenderer&&(t[r][n]=s.fieldRenderer),t}),{})),[e]);return c||p?d().createElement("div",{className:"jp-SettingsPanel",ref:_},t.map((t=>{const e=p?p(t.plugin):null;if(!(c&&c!==t.id||null!==e&&0===e.length))return d().createElement("div",{className:"jp-SettingsForm",key:`${t.id}SettingsEditor`},d().createElement(m,{filteredValues:e,settings:t,renderers:y,hasError:e=>{r(t.id,e)},updateDirtyState:e=>{S(t.id,e)},onSelect:s,translator:o}))}))):d().createElement(v,{translator:o})};class S extends o.SplitPanel{constructor(t){super({orientation:"horizontal",renderer:o.SplitPanel.defaultRenderer,spacing:1}),this._clearDirty=null,this._dirty=!1,this._saveStateChange=new a.Signal(this),this.translator=t.translator||r.nullTranslator,this._status=t.status;const e=this._list=new c({registry:t.registry,toSkip:t.toSkip,translator:this.translator,query:t.query});this.addWidget(e),this.setDirtyState=this.setDirtyState.bind(this),Promise.all(c.sortPlugins(t.registry).filter((t=>{const{schema:e}=t,s=!0===e["jupyter.lab.setting-deprecated"],i=Object.keys(e.properties||{}).length>0,r=!1!==e.additionalProperties;return!s&&(i||r)})).map((async e=>await t.registry.load(e.id)))).then((e=>{const s=n.ReactWidget.create(d().createElement(f,{settings:e.filter((e=>{var s;return!(null!==(s=t.toSkip)&&void 0!==s?s:[]).includes(e.id)})),editorRegistry:t.editorRegistry,handleSelectSignal:this._list.handleSelectSignal,onSelect:t=>this._list.selection=t,hasError:this._list.setError,updateFilterSignal:this._list.updateFilterSignal,updateDirtyState:this.setDirtyState,translator:this.translator,initialFilter:this._list.filter}));this.addWidget(s)})).catch((t=>{console.error(`Fail to load the setting plugins:\n${t}`)}))}get saveStateChanged(){return this._saveStateChange}setDirtyState(t){this._dirty=t,this._dirty&&!this._clearDirty?this._clearDirty=this._status.setDirty():!this._dirty&&this._clearDirty&&(this._clearDirty.dispose(),this._clearDirty=null),t?this.title.className.includes("jp-mod-dirty")||(this.title.className+=" jp-mod-dirty"):this.title.className=this.title.className.replace("jp-mod-dirty",""),this._saveStateChange.emit(t?"started":"completed")}onCloseRequest(t){const e=this.translator.load("jupyterlab");this._list.hasErrors?(0,i.showDialog)({title:e.__("Warning"),body:e.__("Unsaved changes due to validation error. Continue without saving?")}).then((e=>{e.button.accept&&(this.dispose(),super.onCloseRequest(t))})):this._dirty?(0,i.showDialog)({title:e.__("Warning"),body:e.__("Some changes have not been saved. Continue without saving?")}).then((e=>{e.button.accept&&(this.dispose(),super.onCloseRequest(t))})):(this.dispose(),super.onCloseRequest(t))}}var y=s(8434);const E="jp-Inspector-content";class w extends o.Panel{constructor(t={}){super(),this._source=null,this.translator=t.translator||r.nullTranslator,this._trans=this.translator.load("jupyterlab"),t.initialContent instanceof o.Widget?this._content=t.initialContent:"string"==typeof t.initialContent?this._content=w._generateContentWidget(`<p>${t.initialContent}</p>`):this._content=w._generateContentWidget("<p>"+this._trans.__("Click on a function to see documentation.")+"</p>"),this.addClass("jp-Inspector"),this.layout.addWidget(this._content)}[i.Printing.symbol](){return()=>i.Printing.printWidget(this)}get source(){return this._source}set source(t){this._source!==t&&(this._source&&(this._source.standby=!0,this._source.inspected.disconnect(this.onInspectorUpdate,this),this._source.disposed.disconnect(this.onSourceDisposed,this)),t&&t.isDisposed&&(t=null),this._source=t,this._source&&(this._source.standby=!1,this._source.inspected.connect(this.onInspectorUpdate,this),this._source.disposed.connect(this.onSourceDisposed,this)))}dispose(){this.isDisposed||(this.source=null,super.dispose())}onInspectorUpdate(t,e){const{content:s}=e;s&&s!==this._content&&(this._content.dispose(),this._content=s,s.addClass(E),this.layout.addWidget(s))}onSourceDisposed(t,e){this.source=null}static _generateContentWidget(t){const e=new o.Widget;return e.node.innerHTML=t,e.addClass(E),e.addClass("jp-Inspector-default-content"),e}}var C=s(85421),b=s(42628);class j{constructor(t){this._cleared=new a.Signal(this),this._disposed=new a.Signal(this),this._editor=null,this._inspected=new a.Signal(this),this._isDisposed=!1,this._pending=0,this._standby=!0,this._lastInspectedReply=null,this._connector=t.connector,this._rendermime=t.rendermime,this._debouncer=new p.Debouncer(this.onEditorChange.bind(this),250)}get cleared(){return this._cleared}get disposed(){return this._disposed}get inspected(){return this._inspected}get editor(){return this._editor}set editor(t){if(t===this._editor)return;a.Signal.disconnectReceiver(this);const e=this._editor=t;e&&(this._cleared.emit(void 0),this.onEditorChange(),e.model.selections.changed.connect(this._onChange,this),e.model.sharedModel.changed.connect(this._onChange,this))}get standby(){return this._standby}set standby(t){this._standby=t}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this._debouncer.dispose(),this._disposed.emit(void 0),a.Signal.clearData(this))}onEditorChange(t){if(this._standby)return;const e=this.editor;if(!e)return;const s=t||e.model.sharedModel.getSource(),i=e.getCursorPosition(),r=C.Text.jsIndexToCharIndex(e.getOffsetAt(i),s),n={content:null},a=++this._pending;this._connector.fetch({offset:r,text:s}).then((t=>{if(!t||this.isDisposed||a!==this._pending)return this._lastInspectedReply=null,void this._inspected.emit(n);const{data:e}=t;if(this._lastInspectedReply&&u.JSONExt.deepEqual(this._lastInspectedReply,e))return;const s=this._rendermime.preferredMimeType(e);if(s){const t=this._rendermime.createRenderer(s),i=new b.MimeModel({data:e});t.renderModel(i),n.content=t}this._lastInspectedReply=t.data,this._inspected.emit(n)})).catch((t=>{this._lastInspectedReply=null,this._inspected.emit(n)}))}_onChange(){this._debouncer.invoke()}}var D=s(18245);class P extends D.DataConnector{constructor(t,e){super(),this._current=0,this._editor=t,this._trans=(null!=e?e:r.nullTranslator).load("jupyterlab")}fetch(t){return new Promise((e=>{const s=this._current=window.setTimeout((()=>{if(s!==this._current)return e(void 0);const i=this._validate(t.text);if(!i)return e({data:{"text/markdown":this._trans.__("No errors found")},metadata:{}});e({data:this.render(i),metadata:{}})}),100)}))}render(t){return{"text/markdown":t.map(this.renderError.bind(this)).join("")}}renderError(t){var e;switch(t.keyword){case"additionalProperties":return`**\`[${this._trans.__("additional property error")}]\`**\n          ${this._trans.__("`%1` is not a valid property",null===(e=t.params)||void 0===e?void 0:e.additionalProperty)}`;case"syntax":return`**\`[${this._trans.__("syntax error")}]\`** *${t.message}*`;case"type":return`**\`[${this._trans.__("type error")}]\`**\n          \`${t.instancePath}\` ${t.message}`;default:return`**\`[${this._trans.__("error")}]\`** *${t.message}*`}}_validate(t){const e=this._editor;if(!e.settings)return null;const{id:s,schema:i,version:r}=e.settings;return e.registry.validator.validateData({data:{composite:{},user:{}},id:s,raw:t,schema:i,version:r},!1)}}const T="jp-mod-error";class R extends o.SplitPanel{constructor(t){super({orientation:"horizontal",renderer:o.SplitPanel.defaultRenderer,spacing:1}),this._canRevert=!1,this._canSave=!1,this._commandsChanged=new a.Signal(this),this._settings=null,this._toolbar=new n.Toolbar;const{commands:e,editorFactory:s,registry:i,translator:l}=t;this.registry=i,this.translator=l||r.nullTranslator,this._commands=e;const d=this._defaults=new y.CodeEditorWrapper({editorOptions:{config:{readOnly:!0}},model:new y.CodeEditor.Model({mimeType:"text/javascript"}),factory:s}),h=this._user=new y.CodeEditorWrapper({editorOptions:{config:{lineNumbers:!0}},model:new y.CodeEditor.Model({mimeType:"text/javascript"}),factory:s});h.addClass("jp-SettingsRawEditor-user"),h.editor.model.sharedModel.changed.connect(this._onTextChanged,this),this._inspector=function(t,e,s){const i=(s=s||r.nullTranslator).load("jupyterlab"),n=new P(t,s),a=new w({initialContent:i.__("Any errors will be listed here"),translator:s}),o=new j({connector:n,rendermime:e||new b.RenderMimeRegistry({initialFactories:b.standardRendererFactories,translator:s})});return a.addClass("jp-SettingsDebug"),a.source=o,o.editor=t.source,a}(this,t.rendermime,this.translator),this.addClass("jp-SettingsRawEditor"),this._onSaveError=t.onSaveError,this.addWidget(x.defaultsEditor(d,this.translator)),this.addWidget(x.userEditor(h,this._toolbar,this._inspector,this.translator))}get canRevert(){return this._canRevert}get canSave(){return this._canSave}get commandsChanged(){return this._commandsChanged}get isDirty(){var t,e;return null!==(e=this._user.editor.model.sharedModel.getSource()!==(null===(t=this._settings)||void 0===t?void 0:t.raw))&&void 0!==e?e:""}get settings(){return this._settings}set settings(t){if(!t&&!this._settings)return;if(t&&this._settings&&t.plugin===this._settings.plugin)return;const e=this._defaults,s=this._user;this._settings&&this._settings.changed.disconnect(this._onSettingsChanged,this),t?(this._settings=t,this._settings.changed.connect(this._onSettingsChanged,this),this._onSettingsChanged()):(this._settings=null,e.editor.model.sharedModel.setSource(""),s.editor.model.sharedModel.setSource("")),this.update()}get sizes(){return this.relativeSizes()}set sizes(t){this.setRelativeSizes(t)}get source(){return this._user.editor}dispose(){this.isDisposed||(this._defaults.model.dispose(),this._defaults.dispose(),this._user.model.dispose(),this._user.dispose(),super.dispose())}revert(){var t,e;this._user.editor.model.sharedModel.setSource(null!==(e=null===(t=this.settings)||void 0===t?void 0:t.raw)&&void 0!==e?e:""),this._updateToolbar(!1,!1)}save(){if(!this.isDirty||!this._settings)return Promise.resolve(void 0);const t=this._settings,e=this._user.editor.model.sharedModel.getSource();return t.save(e).then((()=>{this._updateToolbar(!1,!1)})).catch((t=>{this._updateToolbar(!0,!1),this._onSaveError(t,this.translator)}))}onAfterAttach(t){x.populateToolbar(this._commands,this._toolbar),this.update()}_onTextChanged(){const t=this._user.editor.model.sharedModel.getSource(),e=this._settings;if(this.removeClass(T),e&&e.raw!==t)return e.validate(t)?(this.addClass(T),void this._updateToolbar(!0,!1)):void this._updateToolbar(!0,!0);this._updateToolbar(!1,!1)}_onSettingsChanged(){var t,e;const s=this._settings,i=this._defaults,r=this._user;i.editor.model.sharedModel.setSource(null!==(t=null==s?void 0:s.annotatedDefaults())&&void 0!==t?t:""),r.editor.model.sharedModel.setSource(null!==(e=null==s?void 0:s.raw)&&void 0!==e?e:"")}_updateToolbar(t=this._canRevert,e=this._canSave){const s=this._commands;this._canRevert=t,this._canSave=e,this._commandsChanged.emit([s.revert,s.save])}}var x,F;!function(t){t.defaultsEditor=function(t,e){const s=(e=e||r.nullTranslator).load("jupyterlab"),i=new o.Widget,a=i.layout=new o.BoxLayout({spacing:0}),l=new o.Widget,d=new n.Toolbar,h=s.__("System Defaults");return l.node.innerText=h,d.insertItem(0,"banner",l),a.addWidget(d),a.addWidget(t),i},t.populateToolbar=function(t,e){const{registry:s,revert:i,save:r}=t;e.addItem("spacer",n.Toolbar.createSpacerItem()),[i,r].forEach((t=>{const i=new n.CommandToolbarButton({commands:s,id:t});e.addItem(t,i)}))},t.userEditor=function(t,e,s,i){const n=(i=i||r.nullTranslator).load("jupyterlab").__("User Preferences"),a=new o.Widget,l=a.layout=new o.BoxLayout({spacing:0}),d=new o.Widget;return d.node.innerText=n,e.insertItem(0,"banner",d),l.addWidget(e),l.addWidget(t),l.addWidget(s),a}}(x||(x={}));class k extends o.Widget{constructor(t){super(),this._settings=null,this._stateChanged=new a.Signal(this),this.addClass("jp-PluginEditor");const{commands:e,editorFactory:s,registry:i,rendermime:n,translator:l}=t;this.translator=l||r.nullTranslator,this._trans=this.translator.load("jupyterlab");const d=this.layout=new o.StackedLayout,{onSaveError:h}=F;this.raw=this._rawEditor=new R({commands:e,editorFactory:s,onSaveError:h,registry:i,rendermime:n,translator:l}),this._rawEditor.handleMoved.connect(this._onStateChanged,this),d.addWidget(this._rawEditor)}get isDirty(){return this._rawEditor.isDirty}get settings(){return this._settings}set settings(t){if(this._settings===t)return;const e=this._rawEditor;this._settings=e.settings=t,this.update()}get state(){const t=this._settings?this._settings.id:"",{sizes:e}=this._rawEditor;return{plugin:t,sizes:e}}set state(t){u.JSONExt.deepEqual(this.state,t)||(this._rawEditor.sizes=t.sizes,this.update())}get stateChanged(){return this._stateChanged}confirm(){return!this.isHidden&&this.isAttached&&this.isDirty?(0,i.showDialog)({title:this._trans.__("You have unsaved changes."),body:this._trans.__("Do you want to leave without saving?"),buttons:[i.Dialog.cancelButton({label:this._trans.__("Cancel")}),i.Dialog.okButton({label:this._trans.__("Ok")})]}).then((t=>{if(!t.button.accept)throw new Error("User canceled.")})):Promise.resolve(void 0)}dispose(){this.isDisposed||(super.dispose(),this._rawEditor.dispose())}onAfterAttach(t){this.update()}onUpdateRequest(t){const e=this._rawEditor;this._settings?(this.show(),e.show()):this.hide()}_onStateChanged(){this.stateChanged.emit(void 0)}}!function(t){t.onSaveError=function(t,e){const s=(e=e||r.nullTranslator).load("jupyterlab");console.error(`Saving setting editor value failed: ${t.message}`),(0,i.showErrorMessage)(s.__("Your changes were not saved."),t)}}(F||(F={}));const N={sizes:[1,3],container:{editor:"raw",plugin:"",sizes:[1,1]}};class M extends o.SplitPanel{constructor(t){super({orientation:"horizontal",renderer:o.SplitPanel.defaultRenderer,spacing:1}),this._fetching=null,this._saving=!1,this._state=u.JSONExt.deepCopy(N),this.translator=t.translator||r.nullTranslator,this.addClass("jp-SettingEditor"),this.key=t.key,this.state=t.state;const{commands:e,editorFactory:s,rendermime:i}=t,a=this.registry=t.registry,d=this._instructions=n.ReactWidget.create(l.createElement(v,{translator:this.translator}));d.addClass("jp-SettingEditorInstructions");const h=this._editor=new k({commands:e,editorFactory:s,registry:a,rendermime:i,translator:this.translator}),p=this._list=new c({confirm:()=>h.confirm(),registry:a,translator:this.translator}),g=t.when;g&&(this._when=Array.isArray(g)?Promise.all(g):g),this.addWidget(p),this.addWidget(d),o.SplitPanel.setStretch(p,0),o.SplitPanel.setStretch(d,1),o.SplitPanel.setStretch(h,1),h.stateChanged.connect(this._onStateChanged,this),p.changed.connect(this._onStateChanged,this),this.handleMoved.connect(this._onStateChanged,this)}get canRevertRaw(){return this._editor.raw.canRevert}get canSaveRaw(){return this._editor.raw.canSave}get commandsChanged(){return this._editor.raw.commandsChanged}get settings(){return this._editor.settings}get source(){return this._editor.raw.source}dispose(){this.isDisposed||(super.dispose(),this._editor.dispose(),this._instructions.dispose(),this._list.dispose())}revert(){this._editor.raw.revert()}save(){return this._editor.raw.save()}onAfterAttach(t){super.onAfterAttach(t),this.hide(),this._fetchState().then((()=>{this.show(),this._setState()})).catch((t=>{console.error("Fetching setting editor state failed",t),this.show(),this._setState()}))}onCloseRequest(t){this._editor.confirm().then((()=>{super.onCloseRequest(t),this.dispose()})).catch((()=>{}))}_fetchState(){if(this._fetching)return this._fetching;const{key:t,state:e}=this,s=[e.fetch(t),this._when];return this._fetching=Promise.all(s).then((([t])=>{this._fetching=null,this._saving||(this._state=O.normalizeState(t,this._state))}))}async _onStateChanged(){this._state.sizes=this.relativeSizes(),this._state.container=this._editor.state,this._state.container.plugin=this._list.selection;try{await this._saveState()}catch(t){console.error("Saving setting editor state failed",t)}this._setState()}async _saveState(){const{key:t,state:e}=this,s=this._state;this._saving=!0;try{await e.save(t,s),this._saving=!1}catch(t){throw this._saving=!1,t}}_setLayout(){const t=this._editor,e=this._state;t.state=e.container,requestAnimationFrame((()=>{this.setRelativeSizes(e.sizes)}))}_setState(){const t=this._editor,e=this._list,{container:s}=this._state;if(!s.plugin)return t.settings=null,e.selection="",void this._setLayout();if(t.settings&&t.settings.id===s.plugin)return void this._setLayout();const i=this._instructions;this.registry.load(s.plugin).then((r=>{i.isAttached&&(i.parent=null),t.isAttached||this.addWidget(t),t.settings=r,e.selection=s.plugin,this._setLayout()})).catch((i=>{console.error(`Loading ${s.plugin} settings failed.`,i),e.selection=this._state.container.plugin="",t.settings=null,this._setLayout()}))}}var O;!function(t){function e(t){return Array.isArray(t)&&t.every((t=>"number"==typeof t))}t.normalizeState=function(t,s){if(!t)return u.JSONExt.deepCopy(N);if("sizes"in t&&e(t.sizes)||(t.sizes=u.JSONExt.deepCopy(N.sizes)),!("container"in t))return t.container=u.JSONExt.deepCopy(N.container),t;const i="container"in t&&t.container&&"object"==typeof t.container?t.container:{};return t.container={plugin:"string"==typeof i.plugin?i.plugin:N.container.plugin,sizes:e(i.sizes)?i.sizes:u.JSONExt.deepCopy(N.container.sizes)},t}}(O||(O={}));var W=s(24758)},24758:(t,e,s)=>{s.d(e,{O:()=>r,g:()=>n});var i=s(20998);const r=new i.Token("@jupyterlab/settingeditor:ISettingEditorTracker","A widget tracker for the interactive setting editor.\n  Use this if you want to be able to iterate over and interact with setting editors\n  created by the application."),n=new i.Token("@jupyterlab/settingeditor:IJSONSettingEditorTracker","A widget tracker for the JSON setting editor.\n  Use this if you want to be able to iterate over and interact with setting editors\n  created by the application.")}}]);
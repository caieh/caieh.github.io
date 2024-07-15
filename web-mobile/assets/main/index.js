System.register("chunks:///_virtual/CoreEventManager.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e1051snEjtJ35J8+QHJuAMw", "CoreEventManager", undefined);
      var EventManager = /*#__PURE__*/function () {
        function EventManager() {
          this.handle = {};
        }
        var _proto = EventManager.prototype;
        _proto.on = function on(eventName, cb, target) {
          if (!this.handle[eventName]) {
            this.handle[eventName] = [];
          }
          var data = {
            func: cb,
            target: target
          };
          this.handle[eventName].push(data);
        };
        _proto.off = function off(eventName, cb, target) {
          var list = this.handle[eventName];
          if (!list || list.length <= 0) {
            return;
          }
          for (var i = 0; i < list.length; i++) {
            var event = list[i];
            if (event.func === cb && (!target || target === event.target)) {
              list.splice(i, 1);
              break;
            }
          }
        };
        _proto.dispatchEvent = function dispatchEvent(eventName) {
          var list = this.handle[eventName];
          if (!list || list.length <= 0) {
            return;
          }
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          for (var i = 0; i < list.length; i++) {
            var event = list[i];
            event.func.apply(event.target, args);
          }
        };
        return EventManager;
      }();
      var CoreEventManager = exports('default', new EventManager());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CoreEventName.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "33f05prhZhJtqK4h1z4ewaF", "CoreEventName", undefined);
      var CoreEventName = exports('CoreEventName', function CoreEventName() {
        this.I18N_BUNDLE_LOADED_SUCCESS = "I18N_BUNDLE_LOADED_SUCCESS";
      });
      var CoreEventName$1 = exports('default', new CoreEventName());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Canvas, UITransform, instantiate, Label, Color, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      Color = module.Color;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/I18nData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f7f479N6WxFw4TnA+F6Duax", "I18nData", undefined);
      var I18nData = exports('I18nData', {
        ar: "ar",
        en: "en",
        ja: "ja",
        ko: "ko",
        ru: "ru",
        tw: "tw",
        zh: "zh"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/I18nLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18nMgr.ts', './CoreEventManager.ts', './CoreEventName.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, I18nMgr, CoreEventManager, CoreEventName;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      I18nMgr = module.default;
    }, function (module) {
      CoreEventManager = module.default;
    }, function (module) {
      CoreEventName = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "010b5WrrmRFVa06jaajICPk", "I18nLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var I18nLabel = exports('I18nLabel', (_dec = ccclass("I18nLabel"), _dec(_class = (_class2 = /*#__PURE__*/function (_Label) {
        _inheritsLoose(I18nLabel, _Label);
        function I18nLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Label.call.apply(_Label, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "key", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = I18nLabel.prototype;
        _proto.onLoad = function onLoad() {
          this.node.getComponent(Label).string = "";
          CoreEventManager.on(CoreEventName.I18N_BUNDLE_LOADED_SUCCESS, this.onI18nBundleLoadedSuccess, this);
          this.updateRender();
        };
        _proto.onDestroy = function onDestroy() {
          CoreEventManager.off(CoreEventName.I18N_BUNDLE_LOADED_SUCCESS, this.onI18nBundleLoadedSuccess, this);
        };
        _proto.onI18nBundleLoadedSuccess = function onI18nBundleLoadedSuccess() {
          this.updateRender();
        };
        _proto.updateRender = function updateRender() {
          console.log("# I18nLabel updateRender #", I18nMgr.i18nTextJson);
          if (I18nMgr.i18nTextJson) {
            this.node.getComponent(Label).string = I18nMgr.i18nTextJson.json[I18nMgr.languageKey][this.key];
          }
        };
        return I18nLabel;
      }(Label), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/I18nMgr.ts", ['cc', './I18nData.ts', './CoreEventManager.ts', './CoreEventName.ts'], function (exports) {
  var cclegacy, sys, assetManager, JsonAsset, I18nData, CoreEventManager, CoreEventName;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      assetManager = module.assetManager;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      I18nData = module.I18nData;
    }, function (module) {
      CoreEventManager = module.default;
    }, function (module) {
      CoreEventName = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "459dbV0UbNM0pAA6I1mZtWK", "I18nMgr", undefined);
      var I18nMgr = /*#__PURE__*/function () {
        function I18nMgr() {
          this.languageCode = "";
          this.languageKey = "";
          this.i18nBundle = null;
          this.i18nTextJson = null;
          {
            console.log("# I18nMgr constructor #");
            this.initI18nCode();
            this.initI18nBundle();
          }
        }

        // 初始化多语言
        var _proto = I18nMgr.prototype;
        _proto.initI18nCode = function initI18nCode() {
          console.log("# I18nMgr initI18n #");
          this.languageCode = sys.languageCode;
          var languageName = sys.languageCode.slice(0, 2);
          this.languageKey = I18nData[languageName];
          if (window["wx"]) {
            this.languageKey = I18nData.zh;
          } else if (!this.languageKey) {
            this.languageKey = I18nData.en;
          } else if (this.languageKey == I18nData.zh && this.languageCode.indexOf(I18nData.tw) != -1) {
            // 繁体
            this.languageKey = I18nData.tw;
          }
          console.log("# language code: " + this.languageCode + " #");
          console.log("# language key: " + this.languageKey + " #");
        }

        // 初始化多语言资源bundle
        ;

        _proto.initI18nBundle = function initI18nBundle() {
          var _this = this;
          assetManager.loadBundle("i18n_bundle", function (err, bundle) {
            if (err) {
              console.error("# initI18nBundle Error #", err);
            } else {
              console.log("# initI18nBundle Success #", bundle);
              _this.i18nBundle = bundle;
              _this.i18nBundle.load("i18n_text/Languages", JsonAsset, function (err, languagesJson) {
                if (err) {
                  console.error(err);
                } else {
                  _this.i18nTextJson = languagesJson;
                }
              });
              CoreEventManager.dispatchEvent(CoreEventName.I18N_BUNDLE_LOADED_SUCCESS);
            }
          });
        }

        // 获取指定多语言language
        ;

        _proto.getLanguageTextByKey = function getLanguageTextByKey(key) {
          var languageText = "";
          if (this.i18nTextJson) {
            var json = this.i18nTextJson.json;
            languageText = json[this.languageKey][key];
          }
          return languageText;
        };
        return I18nMgr;
      }();
      var I18nMgr$1 = exports('default', new I18nMgr());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/I18nSprite.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18nMgr.ts', './CoreEventManager.ts', './CoreEventName.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, I18nMgr, CoreEventManager, CoreEventName;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      I18nMgr = module.default;
    }, function (module) {
      CoreEventManager = module.default;
    }, function (module) {
      CoreEventName = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "4f779cNPblCBIFHmioHvN9e", "I18nSprite", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var I18nSprite = exports('I18nSprite', (_dec = ccclass("I18nSprite"), _dec(_class = (_class2 = /*#__PURE__*/function (_Sprite) {
        _inheritsLoose(I18nSprite, _Sprite);
        function I18nSprite() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Sprite.call.apply(_Sprite, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "key", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = I18nSprite.prototype;
        _proto.onLoad = function onLoad() {
          this.node.getComponent(Sprite).spriteFrame = null;
          CoreEventManager.on(CoreEventName.I18N_BUNDLE_LOADED_SUCCESS, this.onI18nBundleLoadedSuccess, this);
          this.updateRender();
        };
        _proto.onDestroy = function onDestroy() {
          CoreEventManager.off(CoreEventName.I18N_BUNDLE_LOADED_SUCCESS, this.onI18nBundleLoadedSuccess, this);
        };
        _proto.onI18nBundleLoadedSuccess = function onI18nBundleLoadedSuccess() {
          this.updateRender();
        };
        _proto.updateRender = function updateRender() {
          var _this2 = this;
          console.log("# I18nSprite updateRender #", I18nMgr.i18nBundle);
          if (I18nMgr.i18nBundle) {
            I18nMgr.i18nBundle.load("i18n_images/" + I18nMgr.languageKey + "/" + this.key + "/spriteFrame", SpriteFrame, function (err, spriteFrame) {
              if (err) {
                console.error(err);
              } else {
                _this2.node.getComponent(Sprite).spriteFrame = spriteFrame;
              }
            });
          }
        };
        return I18nSprite;
      }(Sprite), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './CoreEventManager.ts', './CoreEventName.ts', './I18nData.ts', './I18nLabel.ts', './I18nMgr.ts', './I18nSprite.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
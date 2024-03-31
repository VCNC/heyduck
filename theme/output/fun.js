(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/air-datepicker/air-datepicker.js
  var require_air_datepicker = __commonJS({
    "node_modules/air-datepicker/air-datepicker.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AirDatepicker = t() : e.AirDatepicker = t();
      }(exports, function() {
        return function() {
          "use strict";
          var e = { d: function(t2, i2) {
            for (var s2 in i2)
              e.o(i2, s2) && !e.o(t2, s2) && Object.defineProperty(t2, s2, { enumerable: true, get: i2[s2] });
          }, o: function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          } }, t = {};
          e.d(t, { default: function() {
            return R;
          } });
          var i = { days: "days", months: "months", years: "years", day: "day", month: "month", year: "year", eventChangeViewDate: "changeViewDate", eventChangeCurrentView: "changeCurrentView", eventChangeFocusDate: "changeFocusDate", eventChangeSelectedDate: "changeSelectedDate", eventChangeTime: "changeTime", eventChangeLastSelectedDate: "changeLastSelectedDate", actionSelectDate: "selectDate", actionUnselectDate: "unselectDate", cssClassWeekend: "-weekend-" }, s = { classes: "", inline: false, locale: { days: ["\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435", "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A", "\u0412\u0442\u043E\u0440\u043D\u0438\u043A", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440\u0433", "\u041F\u044F\u0442\u043D\u0438\u0446\u0430", "\u0421\u0443\u0431\u0431\u043E\u0442\u0430"], daysShort: ["\u0412\u043E\u0441", "\u041F\u043E\u043D", "\u0412\u0442\u043E", "\u0421\u0440\u0435", "\u0427\u0435\u0442", "\u041F\u044F\u0442", "\u0421\u0443\u0431"], daysMin: ["\u0412\u0441", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"], months: ["\u042F\u043D\u0432\u0430\u0440\u044C", "\u0424\u0435\u0432\u0440\u0430\u043B\u044C", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0435\u043B\u044C", "\u041C\u0430\u0439", "\u0418\u044E\u043D\u044C", "\u0418\u044E\u043B\u044C", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u041E\u043A\u0442\u044F\u0431\u0440\u044C", "\u041D\u043E\u044F\u0431\u0440\u044C", "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"], monthsShort: ["\u042F\u043D\u0432", "\u0424\u0435\u0432", "\u041C\u0430\u0440", "\u0410\u043F\u0440", "\u041C\u0430\u0439", "\u0418\u044E\u043D", "\u0418\u044E\u043B", "\u0410\u0432\u0433", "\u0421\u0435\u043D", "\u041E\u043A\u0442", "\u041D\u043E\u044F", "\u0414\u0435\u043A"], today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F", clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C", dateFormat: "dd.MM.yyyy", timeFormat: "HH:mm", firstDay: 1 }, startDate: /* @__PURE__ */ new Date(), firstDay: "", weekends: [6, 0], dateFormat: "", altField: "", altFieldDateFormat: "T", toggleSelected: true, keyboardNav: true, selectedDates: false, container: "", isMobile: false, visible: false, position: "bottom left", offset: 12, view: i.days, minView: i.days, showOtherMonths: true, selectOtherMonths: true, moveToOtherMonthsOnSelect: true, showOtherYears: true, selectOtherYears: true, moveToOtherYearsOnSelect: true, minDate: "", maxDate: "", disableNavWhenOutOfRange: true, multipleDates: false, multipleDatesSeparator: ", ", range: false, dynamicRange: true, buttons: false, monthsField: "monthsShort", showEvent: "focus", autoClose: false, fixedHeight: false, prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>', nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>', navTitles: { days: "MMMM, <i>yyyy</i>", months: "yyyy", years: "yyyy1 - yyyy2" }, timepicker: false, onlyTimepicker: false, dateTimeSeparator: " ", timeFormat: "", minHours: 0, maxHours: 24, minMinutes: 0, maxMinutes: 59, hoursStep: 1, minutesStep: 1, onSelect: false, onChangeViewDate: false, onChangeView: false, onRenderCell: false, onShow: false, onHide: false, onClickDayName: false };
          function a(e2) {
            let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
            return "string" == typeof e2 ? t2.querySelector(e2) : e2;
          }
          function n() {
            let { tagName: e2 = "div", className: t2 = "", innerHtml: i2 = "", id: s2 = "", attrs: a2 = {} } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = document.createElement(e2);
            return t2 && n2.classList.add(...t2.split(" ")), s2 && (n2.id = s2), i2 && (n2.innerHTML = i2), a2 && r(n2, a2), n2;
          }
          function r(e2, t2) {
            for (let [i2, s2] of Object.entries(t2))
              void 0 !== s2 && e2.setAttribute(i2, s2);
            return e2;
          }
          function o(e2) {
            return new Date(e2.getFullYear(), e2.getMonth() + 1, 0).getDate();
          }
          function h(e2) {
            let t2 = e2.getHours(), { hours: i2, dayPeriod: s2 } = l(t2);
            return { year: e2.getFullYear(), month: e2.getMonth(), fullMonth: e2.getMonth() + 1 < 10 ? "0" + (e2.getMonth() + 1) : e2.getMonth() + 1, date: e2.getDate(), fullDate: e2.getDate() < 10 ? "0" + e2.getDate() : e2.getDate(), day: e2.getDay(), hours: t2, fullHours: d(t2), hours12: i2, dayPeriod: s2, fullHours12: d(i2), minutes: e2.getMinutes(), fullMinutes: e2.getMinutes() < 10 ? "0" + e2.getMinutes() : e2.getMinutes() };
          }
          function l(e2) {
            return { dayPeriod: e2 > 11 ? "pm" : "am", hours: e2 % 12 == 0 ? 12 : e2 % 12 };
          }
          function d(e2) {
            return e2 < 10 ? "0" + e2 : e2;
          }
          function c(e2) {
            let t2 = 10 * Math.floor(e2.getFullYear() / 10);
            return [t2, t2 + 9];
          }
          function u() {
            let e2 = [];
            for (var t2 = arguments.length, i2 = new Array(t2), s2 = 0; s2 < t2; s2++)
              i2[s2] = arguments[s2];
            return i2.forEach((t3) => {
              if ("object" == typeof t3)
                for (let i3 in t3)
                  t3[i3] && e2.push(i3);
              else
                t3 && e2.push(t3);
            }), e2.join(" ");
          }
          function p(e2, t2) {
            let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
            if (!e2 || !t2)
              return false;
            let a2 = h(e2), n2 = h(t2);
            return { [i.days]: a2.date === n2.date && a2.month === n2.month && a2.year === n2.year, [i.months]: a2.month === n2.month && a2.year === n2.year, [i.years]: a2.year === n2.year }[s2];
          }
          function m(e2, t2, i2) {
            let s2 = g(e2, false).getTime(), a2 = g(t2, false).getTime();
            return i2 ? s2 >= a2 : s2 > a2;
          }
          function v(e2, t2) {
            return !m(e2, t2, true);
          }
          function g(e2) {
            let t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = new Date(e2.getTime());
            return "boolean" != typeof t2 || t2 || function(e3) {
              e3.setHours(0, 0, 0, 0);
            }(i2), i2;
          }
          function D(e2, t2, i2) {
            e2.length ? e2.forEach((e3) => {
              e3.addEventListener(t2, i2);
            }) : e2.addEventListener(t2, i2);
          }
          function y(e2, t2) {
            return !(!e2 || e2 === document || e2 instanceof DocumentFragment) && (e2.matches(t2) ? e2 : y(e2.parentNode, t2));
          }
          function f(e2, t2, i2) {
            return e2 > i2 ? i2 : e2 < t2 ? t2 : e2;
          }
          function w(e2) {
            for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), s2 = 1; s2 < t2; s2++)
              i2[s2 - 1] = arguments[s2];
            return i2.filter((e3) => e3).forEach((t3) => {
              for (let [i3, s3] of Object.entries(t3))
                if (void 0 !== s3 && "[object Object]" === s3.toString()) {
                  let t4 = void 0 !== e2[i3] ? e2[i3].toString() : void 0, a2 = s3.toString(), n2 = Array.isArray(s3) ? [] : {};
                  e2[i3] = e2[i3] ? t4 !== a2 ? n2 : e2[i3] : n2, w(e2[i3], s3);
                } else
                  e2[i3] = s3;
            }), e2;
          }
          function b(e2) {
            let t2 = e2;
            return e2 instanceof Date || ("string" == typeof e2 && /^\d{4}-\d{2}-\d{2}$/.test(e2) && (e2 += "T00:00:00"), t2 = new Date(e2)), isNaN(t2.getTime()) && (console.log(`Unable to convert value "${e2}" to Date object`), t2 = false), t2;
          }
          function k(e2) {
            let t2 = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
            return new RegExp("(^|>|" + t2 + ")(" + e2 + ")($|<|" + t2 + ")", "g");
          }
          function $(e2, t2, i2) {
            return (t2 = function(e3) {
              var t3 = function(e4, t4) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var i3 = e4[Symbol.toPrimitive];
                if (void 0 !== i3) {
                  var s2 = i3.call(e4, "string");
                  if ("object" != typeof s2)
                    return s2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              }(e3);
              return "symbol" == typeof t3 ? t3 : String(t3);
            }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
          }
          class C {
            constructor() {
              let { type: e2, date: t2, dp: i2, opts: s2, body: a2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              $(this, "focus", () => {
                this.$cell.classList.add("-focus-"), this.focused = true;
              }), $(this, "removeFocus", () => {
                this.$cell.classList.remove("-focus-"), this.focused = false;
              }), $(this, "select", () => {
                this.$cell.classList.add("-selected-"), this.selected = true;
              }), $(this, "removeSelect", () => {
                this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = false;
              }), $(this, "onChangeSelectedDate", () => {
                this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
              }), $(this, "onChangeFocusDate", (e3) => {
                if (!e3)
                  return void (this.focused && this.removeFocus());
                let t3 = p(e3, this.date, this.type);
                t3 ? this.focus() : !t3 && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
              }), $(this, "render", () => (this.$cell.innerHTML = this._getHtml(), this._handleClasses(), this.$cell)), this.type = e2, this.singleType = this.type.slice(0, -1), this.date = t2, this.dp = i2, this.opts = s2, this.body = a2, this.customData = false, this.init();
            }
            init() {
              var e2;
              let { onRenderCell: t2 } = this.opts;
              t2 && (this.customData = t2({ date: this.date, cellType: this.singleType, datepicker: this.dp })), this._createElement(), this._bindDatepickerEvents(), null !== (e2 = this.customData) && void 0 !== e2 && e2.disabled && this.dp.disableDate(this.date);
            }
            _bindDatepickerEvents() {
              this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            unbindDatepickerEvents() {
              this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            _createElement() {
              var e2;
              let { year: t2, month: i2, date: s2 } = h(this.date), a2 = (null === (e2 = this.customData) || void 0 === e2 ? void 0 : e2.attrs) || {};
              this.$cell = n({ attrs: { "data-year": t2, "data-month": i2, "data-date": s2, ...a2 } }), this.$cell.adpCell = this;
            }
            _getClassName() {
              var e2;
              let t2 = /* @__PURE__ */ new Date(), { selectOtherMonths: s2, selectOtherYears: a2 } = this.opts, { minDate: n2, maxDate: r2, isDateDisabled: o2 } = this.dp, { day: l2 } = h(this.date), d2 = this._isOutOfMinMaxRange(), c2 = o2(this.date), m2 = u("air-datepicker-cell", `-${this.singleType}-`, { "-current-": p(t2, this.date, this.type), "-min-date-": n2 && p(n2, this.date, this.type), "-max-date-": r2 && p(r2, this.date, this.type) }), v2 = "";
              switch (this.type) {
                case i.days:
                  v2 = u({ "-weekend-": this.dp.isWeekend(l2), "-other-month-": this.isOtherMonth, "-disabled-": this.isOtherMonth && !s2 || d2 || c2 });
                  break;
                case i.months:
                  v2 = u({ "-disabled-": d2 });
                  break;
                case i.years:
                  v2 = u({ "-other-decade-": this.isOtherDecade, "-disabled-": d2 || this.isOtherDecade && !a2 });
              }
              return u(m2, v2, null === (e2 = this.customData) || void 0 === e2 ? void 0 : e2.classes).split(" ");
            }
            _getHtml() {
              var e2;
              let { year: t2, month: s2, date: a2 } = h(this.date), { showOtherMonths: n2, showOtherYears: r2 } = this.opts;
              if (null !== (e2 = this.customData) && void 0 !== e2 && e2.html)
                return this.customData.html;
              switch (this.type) {
                case i.days:
                  return !n2 && this.isOtherMonth ? "" : a2;
                case i.months:
                  return this.dp.locale[this.opts.monthsField][s2];
                case i.years:
                  return !r2 && this.isOtherDecade ? "" : t2;
              }
            }
            _isOutOfMinMaxRange() {
              let { minDate: e2, maxDate: t2 } = this.dp, { type: s2, date: a2 } = this, { month: n2, year: r2, date: o2 } = h(a2), l2 = s2 === i.days, d2 = s2 === i.years, c2 = !!e2 && new Date(r2, d2 ? e2.getMonth() : n2, l2 ? o2 : e2.getDate()), u2 = !!t2 && new Date(r2, d2 ? t2.getMonth() : n2, l2 ? o2 : t2.getDate());
              return e2 && t2 ? v(c2, e2) || m(u2, t2) : e2 ? v(c2, e2) : t2 ? m(u2, t2) : void 0;
            }
            destroy() {
              this.unbindDatepickerEvents();
            }
            _handleRangeStatus() {
              const { selectedDates: e2, focusDate: t2, rangeDateTo: i2, rangeDateFrom: s2 } = this.dp, a2 = e2.length;
              if (!a2)
                return;
              let n2 = s2, r2 = i2;
              if (1 === a2 && t2) {
                const i3 = m(t2, e2[0]);
                n2 = i3 ? e2[0] : t2, r2 = i3 ? t2 : e2[0];
              }
              let o2 = u({ "-in-range-": n2 && r2 && (h2 = this.date, l2 = n2, d2 = r2, m(h2, l2) && v(h2, d2)), "-range-from-": n2 && p(this.date, n2, this.type), "-range-to-": r2 && p(this.date, r2, this.type) });
              var h2, l2, d2;
              this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), o2 && this.$cell.classList.add(...o2.split(" "));
            }
            _handleSelectedStatus() {
              let e2 = this.dp._checkIfDateIsSelected(this.date, this.type);
              e2 ? this.select() : !e2 && this.selected && this.removeSelect();
            }
            _handleInitialFocusStatus() {
              p(this.dp.focusDate, this.date, this.type) && this.focus();
            }
            _handleClasses() {
              this.$cell.setAttribute("class", ""), this._handleInitialFocusStatus(), this.dp.hasSelectedDates && (this._handleSelectedStatus(), this.dp.opts.range && this._handleRangeStatus()), this.$cell.classList.add(...this._getClassName());
            }
            get isDisabled() {
              return this.$cell.matches(".-disabled-");
            }
            get isOtherMonth() {
              return this.dp.isOtherMonth(this.date);
            }
            get isOtherDecade() {
              return this.dp.isOtherDecade(this.date);
            }
          }
          function _(e2, t2, i2) {
            return (t2 = function(e3) {
              var t3 = function(e4, t4) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var i3 = e4[Symbol.toPrimitive];
                if (void 0 !== i3) {
                  var s2 = i3.call(e4, "string");
                  if ("object" != typeof s2)
                    return s2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              }(e3);
              return "symbol" == typeof t3 ? t3 : String(t3);
            }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
          }
          let M = { [i.days]: `<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`, [i.months]: `<div class="air-datepicker-body--cells -${i.months}-"></div>`, [i.years]: `<div class="air-datepicker-body--cells -${i.years}-"></div>` };
          const S = ".air-datepicker-cell";
          class T {
            constructor(e2) {
              let { dp: t2, type: s2, opts: a2 } = e2;
              _(this, "handleClick", (e3) => {
                let t3 = e3.target.closest(S).adpCell;
                if (t3.isDisabled)
                  return;
                if (!this.dp.isMinViewReached)
                  return void this.dp.down();
                let i2 = this.dp._checkIfDateIsSelected(t3.date, t3.type);
                i2 ? this.dp._handleAlreadySelectedDates(i2, t3.date) : this.dp.selectDate(t3.date);
              }), _(this, "handleDayNameClick", (e3) => {
                let t3 = e3.target.getAttribute("data-day-index");
                this.opts.onClickDayName({ dayIndex: Number(t3), datepicker: this.dp });
              }), _(this, "onChangeCurrentView", (e3) => {
                e3 !== this.type ? this.hide() : (this.show(), this.render());
              }), _(this, "onMouseOverCell", (e3) => {
                let t3 = y(e3.target, S);
                this.dp.setFocusDate(!!t3 && t3.adpCell.date);
              }), _(this, "onMouseOutCell", () => {
                this.dp.setFocusDate(false);
              }), _(this, "onClickBody", (e3) => {
                let { onClickDayName: t3 } = this.opts, i2 = e3.target;
                i2.closest(S) && this.handleClick(e3), t3 && i2.closest(".air-datepicker-body--day-name") && this.handleDayNameClick(e3);
              }), _(this, "onMouseDown", (e3) => {
                this.pressed = true;
                let t3 = y(e3.target, S), i2 = t3 && t3.adpCell;
                p(i2.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = true), p(i2.date, this.dp.rangeDateTo) && (this.rangeToFocused = true);
              }), _(this, "onMouseMove", (e3) => {
                if (!this.pressed || !this.dp.isMinViewReached)
                  return;
                e3.preventDefault();
                let t3 = y(e3.target, S), i2 = t3 && t3.adpCell, { selectedDates: s3, rangeDateTo: a3, rangeDateFrom: n2 } = this.dp;
                if (!i2 || i2.isDisabled)
                  return;
                let { date: r2 } = i2;
                if (2 === s3.length) {
                  if (this.rangeFromFocused && !m(r2, a3)) {
                    let { hours: e4, minutes: t4 } = h(n2);
                    r2.setHours(e4), r2.setMinutes(t4), this.dp.rangeDateFrom = r2, this.dp.replaceDate(n2, r2);
                  }
                  if (this.rangeToFocused && !v(r2, n2)) {
                    let { hours: e4, minutes: t4 } = h(a3);
                    r2.setHours(e4), r2.setMinutes(t4), this.dp.rangeDateTo = r2, this.dp.replaceDate(a3, r2);
                  }
                }
              }), _(this, "onMouseUp", () => {
                this.pressed = false, this.rangeFromFocused = false, this.rangeToFocused = false;
              }), _(this, "onChangeViewDate", (e3, t3) => {
                if (!this.isVisible)
                  return;
                let s3 = c(e3), a3 = c(t3);
                switch (this.dp.currentView) {
                  case i.days:
                    if (p(e3, t3, i.months))
                      return;
                    break;
                  case i.months:
                    if (p(e3, t3, i.years))
                      return;
                    break;
                  case i.years:
                    if (s3[0] === a3[0] && s3[1] === a3[1])
                      return;
                }
                this.render();
              }), _(this, "render", () => {
                this.destroyCells(), this._generateCells(), this.cells.forEach((e3) => {
                  this.$cells.appendChild(e3.render());
                });
              }), this.dp = t2, this.type = s2, this.opts = a2, this.cells = [], this.$el = "", this.pressed = false, this.isVisible = true, this.init();
            }
            init() {
              this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
            }
            _bindEvents() {
              let { range: e2, dynamicRange: t2 } = this.opts;
              D(this.$el, "mouseover", this.onMouseOverCell), D(this.$el, "mouseout", this.onMouseOutCell), D(this.$el, "click", this.onClickBody), e2 && t2 && (D(this.$el, "mousedown", this.onMouseDown), D(this.$el, "mousemove", this.onMouseMove), D(window.document, "mouseup", this.onMouseUp));
            }
            _bindDatepickerEvents() {
              this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            _buildBaseHtml() {
              this.$el = n({ className: `air-datepicker-body -${this.type}-`, innerHtml: M[this.type] }), this.$names = a(".air-datepicker-body--day-names", this.$el), this.$cells = a(".air-datepicker-body--cells", this.$el);
            }
            _getDayNamesHtml() {
              let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay, t2 = "", s2 = this.dp.isWeekend, { onClickDayName: a2 } = this.opts, n2 = e2, r2 = 0;
              for (; r2 < 7; ) {
                let e3 = n2 % 7;
                t2 += `<div class="${u("air-datepicker-body--day-name", { [i.cssClassWeekend]: s2(e3), "-clickable-": !!a2 })}" data-day-index='${e3}'>${this.dp.locale.daysMin[e3]}</div>`, r2++, n2++;
              }
              return t2;
            }
            renderDayNames() {
              this.$names.innerHTML = this._getDayNamesHtml();
            }
            _generateCell(e2) {
              let { type: t2, dp: i2, opts: s2 } = this;
              return new C({ type: t2, dp: i2, opts: s2, date: e2, body: this });
            }
            _generateCells() {
              T.getDatesFunction(this.type)(this.dp, (e2) => {
                this.cells.push(this._generateCell(e2));
              });
            }
            show() {
              this.isVisible = true, this.$el.classList.remove("-hidden-");
            }
            hide() {
              this.isVisible = false, this.$el.classList.add("-hidden-");
            }
            destroyCells() {
              this.cells.forEach((e2) => e2.destroy()), this.cells = [], this.$cells.innerHTML = "";
            }
            destroy() {
              this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            static getDaysDates(e2, t2) {
              let { viewDate: i2, opts: { fixedHeight: s2 }, locale: { firstDay: a2 } } = e2, n2 = o(i2), { year: r2, month: l2 } = h(i2), d2 = new Date(r2, l2, 1), c2 = new Date(r2, l2, n2), u2 = d2.getDay() - a2, p2 = 6 - c2.getDay() + a2;
              u2 = u2 < 0 ? u2 + 7 : u2, p2 = p2 > 6 ? p2 - 7 : p2;
              let m2 = function(e3, t3) {
                let { year: i3, month: s3, date: a3 } = h(e3);
                return new Date(i3, s3, a3 - t3);
              }(d2, u2), v2 = n2 + u2 + p2, g2 = m2.getDate(), { year: D2, month: y2 } = h(m2), f2 = 0;
              s2 && (v2 = 42);
              const w2 = [];
              for (; f2 < v2; ) {
                let e3 = new Date(D2, y2, g2 + f2);
                t2 && t2(e3), w2.push(e3), f2++;
              }
              return w2;
            }
            static getMonthsDates(e2, t2) {
              let { year: i2 } = e2.parsedViewDate, s2 = 0, a2 = [];
              for (; s2 < 12; ) {
                const e3 = new Date(i2, s2);
                a2.push(e3), t2 && t2(e3), s2++;
              }
              return a2;
            }
            static getYearsDates(e2, t2) {
              let i2 = c(e2.viewDate), s2 = i2[0] - 1, a2 = i2[1] + 1, n2 = s2, r2 = [];
              for (; n2 <= a2; ) {
                const e3 = new Date(n2, 0);
                r2.push(e3), t2 && t2(e3), n2++;
              }
              return r2;
            }
            static getDatesFunction() {
              let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
              return { [i.days]: T.getDaysDates, [i.months]: T.getMonthsDates, [i.years]: T.getYearsDates }[e2];
            }
          }
          function F(e2, t2, i2) {
            return (t2 = function(e3) {
              var t3 = function(e4, t4) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var i3 = e4[Symbol.toPrimitive];
                if (void 0 !== i3) {
                  var s2 = i3.call(e4, "string");
                  if ("object" != typeof s2)
                    return s2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              }(e3);
              return "symbol" == typeof t3 ? t3 : String(t3);
            }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
          }
          class V {
            constructor(e2) {
              let { dp: t2, opts: i2 } = e2;
              F(this, "onClickNav", (e3) => {
                let t3 = y(e3.target, ".air-datepicker-nav--action");
                if (!t3)
                  return;
                let i3 = t3.dataset.action;
                this.dp[i3]();
              }), F(this, "onChangeViewDate", () => {
                this.render(), this._resetNavStatus(), this.handleNavStatus();
              }), F(this, "onChangeCurrentView", () => {
                this.render(), this._resetNavStatus(), this.handleNavStatus();
              }), F(this, "onClickNavTitle", () => {
                this.dp.isFinalView || this.dp.up();
              }), F(this, "update", () => {
                let { prevHtml: e3, nextHtml: t3 } = this.opts;
                this.$prev.innerHTML = e3, this.$next.innerHTML = t3, this._resetNavStatus(), this.render(), this.handleNavStatus();
              }), F(this, "renderDelay", () => {
                setTimeout(this.render);
              }), F(this, "render", () => {
                this.$title.innerHTML = this._getTitle(), function(e3, t3) {
                  for (let i3 in t3)
                    t3[i3] ? e3.classList.add(i3) : e3.classList.remove(i3);
                }(this.$title, { "-disabled-": this.dp.isFinalView });
              }), this.dp = t2, this.opts = i2, this.init();
            }
            init() {
              this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
            }
            _defineDOM() {
              this.$title = a(".air-datepicker-nav--title", this.$el), this.$prev = a('[data-action="prev"]', this.$el), this.$next = a('[data-action="next"]', this.$el);
            }
            _bindEvents() {
              this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
            }
            _bindDatepickerEvents() {
              this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
            }
            destroy() {
              this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
            }
            _createElement() {
              this.$el = n({ tagName: "nav", className: "air-datepicker-nav" });
            }
            _getTitle() {
              let { dp: e2, opts: t2 } = this, i2 = t2.navTitles[e2.currentView];
              return "function" == typeof i2 ? i2(e2) : e2.formatDate(e2.viewDate, i2);
            }
            handleNavStatus() {
              let { disableNavWhenOutOfRange: e2 } = this.opts, { minDate: t2, maxDate: s2 } = this.dp;
              if (!t2 && !s2 || !e2)
                return;
              let { year: a2, month: n2 } = this.dp.parsedViewDate, r2 = !!t2 && h(t2), o2 = !!s2 && h(s2);
              switch (this.dp.currentView) {
                case i.days:
                  t2 && r2.month >= n2 && r2.year >= a2 && this._disableNav("prev"), s2 && o2.month <= n2 && o2.year <= a2 && this._disableNav("next");
                  break;
                case i.months:
                  t2 && r2.year >= a2 && this._disableNav("prev"), s2 && o2.year <= a2 && this._disableNav("next");
                  break;
                case i.years: {
                  let e3 = c(this.dp.viewDate);
                  t2 && r2.year >= e3[0] && this._disableNav("prev"), s2 && o2.year <= e3[1] && this._disableNav("next");
                  break;
                }
              }
            }
            _disableNav(e2) {
              a('[data-action="' + e2 + '"]', this.$el).classList.add("-disabled-");
            }
            _resetNavStatus() {
              !function(e2) {
                for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), s2 = 1; s2 < t2; s2++)
                  i2[s2 - 1] = arguments[s2];
                e2.length ? e2.forEach((e3) => {
                  e3.classList.remove(...i2);
                }) : e2.classList.remove(...i2);
              }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
            }
            _buildBaseHtml() {
              let { prevHtml: e2, nextHtml: t2 } = this.opts;
              this.$el.innerHTML = `<div class="air-datepicker-nav--action" data-action="prev">${e2}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t2}</div>`;
            }
            get isNavIsFunction() {
              let { navTitles: e2 } = this.opts;
              return Object.keys(e2).find((t2) => "function" == typeof e2[t2]);
            }
          }
          var x = { today: { content: (e2) => e2.locale.today, onClick: (e2) => e2.setViewDate(/* @__PURE__ */ new Date()) }, clear: { content: (e2) => e2.locale.clear, onClick: (e2) => e2.clear() } };
          class H {
            constructor(e2) {
              let { dp: t2, opts: i2 } = e2;
              this.dp = t2, this.opts = i2, this.init();
            }
            init() {
              this.createElement(), this.render();
            }
            createElement() {
              this.$el = n({ className: "air-datepicker-buttons" });
            }
            destroy() {
              this.$el.parentNode.removeChild(this.$el);
            }
            clearHtml() {
              return this.$el.innerHTML = "", this;
            }
            generateButtons() {
              let { buttons: e2 } = this.opts;
              Array.isArray(e2) || (e2 = [e2]), e2.forEach((e3) => {
                let t2 = e3;
                "string" == typeof e3 && x[e3] && (t2 = x[e3]);
                let i2 = this.createButton(t2);
                t2.onClick && this.attachEventToButton(i2, t2.onClick), this.$el.appendChild(i2);
              });
            }
            attachEventToButton(e2, t2) {
              e2.addEventListener("click", () => {
                t2(this.dp);
              });
            }
            createButton(e2) {
              let { content: t2, className: i2, tagName: s2 = "button", attrs: a2 = {} } = e2;
              return n({ tagName: s2, innerHtml: `<span tabindex='-1'>${"function" == typeof t2 ? t2(this.dp) : t2}</span>`, className: u("air-datepicker-button", i2), attrs: a2 });
            }
            render() {
              this.generateButtons();
            }
          }
          function E(e2, t2, i2) {
            return (t2 = function(e3) {
              var t3 = function(e4, t4) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var i3 = e4[Symbol.toPrimitive];
                if (void 0 !== i3) {
                  var s2 = i3.call(e4, "string");
                  if ("object" != typeof s2)
                    return s2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              }(e3);
              return "symbol" == typeof t3 ? t3 : String(t3);
            }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
          }
          class L {
            constructor() {
              let { opts: e2, dp: t2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              E(this, "toggleTimepickerIsActive", (e3) => {
                this.dp.timepickerIsActive = e3;
              }), E(this, "onChangeSelectedDate", (e3) => {
                let { date: t3, updateTime: i2 = false } = e3;
                t3 && (this.setMinMaxTime(t3), this.setCurrentTime(!!i2 && t3), this.addTimeToDate(t3));
              }), E(this, "onChangeLastSelectedDate", (e3) => {
                e3 && (this.setTime(e3), this.render());
              }), E(this, "onChangeInputRange", (e3) => {
                let t3 = e3.target;
                this[t3.getAttribute("name")] = t3.value, this.updateText(), this.dp.trigger(i.eventChangeTime, { hours: this.hours, minutes: this.minutes });
              }), E(this, "onMouseEnterLeave", (e3) => {
                let t3 = e3.target.getAttribute("name"), i2 = this.$minutesText;
                "hours" === t3 && (i2 = this.$hoursText), i2.classList.toggle("-focus-");
              }), E(this, "onFocus", () => {
                this.toggleTimepickerIsActive(true);
              }), E(this, "onBlur", () => {
                this.toggleTimepickerIsActive(false);
              }), this.opts = e2, this.dp = t2;
              let { timeFormat: s2 } = this.dp.locale;
              s2 && (s2.match(k("h")) || s2.match(k("hh"))) && (this.ampm = true), this.init();
            }
            init() {
              this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), this.bindDOMEvents();
            }
            bindDatepickerEvents() {
              this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
            }
            bindDOMEvents() {
              let e2 = "input";
              navigator.userAgent.match(/trident/gi) && (e2 = "change"), D(this.$ranges, e2, this.onChangeInputRange), D(this.$ranges, "mouseenter", this.onMouseEnterLeave), D(this.$ranges, "mouseleave", this.onMouseEnterLeave), D(this.$ranges, "focus", this.onFocus), D(this.$ranges, "mousedown", this.onFocus), D(this.$ranges, "blur", this.onBlur);
            }
            createElement() {
              this.$el = n({ className: u("air-datepicker-time", { "-am-pm-": this.dp.ampm }) });
            }
            destroy() {
              this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), this.$el.parentNode.removeChild(this.$el);
            }
            buildHtml() {
              let { ampm: e2, hours: t2, displayHours: i2, minutes: s2, minHours: a2, minMinutes: n2, maxHours: r2, maxMinutes: o2, dayPeriod: h2, opts: { hoursStep: l2, minutesStep: c2 } } = this;
              this.$el.innerHTML = `<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(i2)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s2)}</span>   ` + (e2 ? `<span class='air-datepicker-time--current-ampm'>${h2}</span>` : "") + `</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">      <input type="range" name="hours" value="${t2}" min="${a2}" max="${r2}" step="${l2}"/>   </div>   <div class="air-datepicker-time--row">      <input type="range" name="minutes" value="${s2}" min="${n2}" max="${o2}" step="${c2}"/>   </div></div>`;
            }
            defineDOM() {
              let e2 = (e3) => a(e3, this.$el);
              this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e2('[name="hours"]'), this.$minutes = e2('[name="minutes"]'), this.$hoursText = e2(".air-datepicker-time--current-hours"), this.$minutesText = e2(".air-datepicker-time--current-minutes"), this.$ampm = e2(".air-datepicker-time--current-ampm");
            }
            setTime(e2) {
              this.setMinMaxTime(e2), this.setCurrentTime(e2);
            }
            addTimeToDate(e2) {
              e2 && (e2.setHours(this.hours), e2.setMinutes(this.minutes));
            }
            setMinMaxTime(e2) {
              if (this.setMinMaxTimeFromOptions(), e2) {
                let { minDate: t2, maxDate: i2 } = this.dp;
                t2 && p(e2, t2) && this.setMinTimeFromMinDate(t2), i2 && p(e2, i2) && this.setMaxTimeFromMaxDate(i2);
              }
            }
            setCurrentTime(e2) {
              let { hours: t2, minutes: i2 } = e2 ? h(e2) : this;
              this.hours = f(t2, this.minHours, this.maxHours), this.minutes = f(i2, this.minMinutes, this.maxMinutes);
            }
            setMinMaxTimeFromOptions() {
              let { minHours: e2, minMinutes: t2, maxHours: i2, maxMinutes: s2 } = this.opts;
              this.minHours = f(e2, 0, 23), this.minMinutes = f(t2, 0, 59), this.maxHours = f(i2, 0, 23), this.maxMinutes = f(s2, 0, 59);
            }
            setMinTimeFromMinDate(e2) {
              let { lastSelectedDate: t2 } = this.dp;
              this.minHours = e2.getHours(), t2 && t2.getHours() > e2.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e2.getMinutes();
            }
            setMaxTimeFromMaxDate(e2) {
              let { lastSelectedDate: t2 } = this.dp;
              this.maxHours = e2.getHours(), t2 && t2.getHours() < e2.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e2.getMinutes();
            }
            updateSliders() {
              r(this.$hours, { min: this.minHours, max: this.maxHours }).value = this.hours, r(this.$minutes, { min: this.minMinutes, max: this.maxMinutes }).value = this.minutes;
            }
            updateText() {
              this.$hoursText.innerHTML = d(this.displayHours), this.$minutesText.innerHTML = d(this.minutes), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
            }
            set hours(e2) {
              this._hours = e2;
              let { hours: t2, dayPeriod: i2 } = l(e2);
              this.displayHours = this.ampm ? t2 : e2, this.dayPeriod = i2;
            }
            get hours() {
              return this._hours;
            }
            render() {
              this.updateSliders(), this.updateText();
            }
          }
          function O(e2, t2, i2) {
            return (t2 = function(e3) {
              var t3 = function(e4, t4) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var i3 = e4[Symbol.toPrimitive];
                if (void 0 !== i3) {
                  var s2 = i3.call(e4, "string");
                  if ("object" != typeof s2)
                    return s2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              }(e3);
              return "symbol" == typeof t3 ? t3 : String(t3);
            }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
          }
          class A {
            constructor(e2) {
              let { dp: t2, opts: i2 } = e2;
              O(this, "pressedKeys", /* @__PURE__ */ new Set()), O(this, "hotKeys", /* @__PURE__ */ new Map([[[["Control", "ArrowRight"], ["Control", "ArrowUp"]], (e3) => e3.month++], [[["Control", "ArrowLeft"], ["Control", "ArrowDown"]], (e3) => e3.month--], [[["Shift", "ArrowRight"], ["Shift", "ArrowUp"]], (e3) => e3.year++], [[["Shift", "ArrowLeft"], ["Shift", "ArrowDown"]], (e3) => e3.year--], [[["Alt", "ArrowRight"], ["Alt", "ArrowUp"]], (e3) => e3.year += 10], [[["Alt", "ArrowLeft"], ["Alt", "ArrowDown"]], (e3) => e3.year -= 10], [["Control", "Shift", "ArrowUp"], (e3, t3) => t3.up()]])), O(this, "handleHotKey", (e3) => {
                let t3 = this.hotKeys.get(e3), i3 = h(this.getInitialFocusDate());
                t3(i3, this.dp);
                let { year: s2, month: a2, date: n2 } = i3, r2 = o(new Date(s2, a2));
                r2 < n2 && (n2 = r2);
                let l2 = this.dp.getClampedDate(new Date(s2, a2, n2));
                this.dp.setFocusDate(l2, { viewDateTransition: true });
              }), O(this, "isHotKeyPressed", () => {
                let e3 = false, t3 = this.pressedKeys.size, i3 = (e4) => this.pressedKeys.has(e4);
                for (let [s2] of this.hotKeys) {
                  if (e3)
                    break;
                  if (Array.isArray(s2[0]))
                    s2.forEach((a2) => {
                      e3 || t3 !== a2.length || (e3 = a2.every(i3) && s2);
                    });
                  else {
                    if (t3 !== s2.length)
                      continue;
                    e3 = s2.every(i3) && s2;
                  }
                }
                return e3;
              }), O(this, "isArrow", (e3) => e3 >= 37 && e3 <= 40), O(this, "onKeyDown", (e3) => {
                let { key: t3, which: i3 } = e3, { dp: s2, dp: { focusDate: a2 }, opts: n2 } = this;
                this.registerKey(t3);
                let r2 = this.isHotKeyPressed();
                if (r2)
                  return e3.preventDefault(), void this.handleHotKey(r2);
                if (this.isArrow(i3))
                  return e3.preventDefault(), void this.focusNextCell(t3);
                if ("Enter" === t3) {
                  if (s2.currentView !== n2.minView)
                    return void s2.down();
                  if (a2) {
                    let e4 = s2._checkIfDateIsSelected(a2);
                    return void (e4 ? s2._handleAlreadySelectedDates(e4, a2) : s2.selectDate(a2));
                  }
                }
                "Escape" === t3 && this.dp.hide();
              }), O(this, "onKeyUp", (e3) => {
                this.removeKey(e3.key);
              }), this.dp = t2, this.opts = i2, this.init();
            }
            init() {
              this.bindKeyboardEvents();
            }
            bindKeyboardEvents() {
              let { $el: e2 } = this.dp;
              e2.addEventListener("keydown", this.onKeyDown), e2.addEventListener("keyup", this.onKeyUp);
            }
            destroy() {
              let { $el: e2 } = this.dp;
              e2.removeEventListener("keydown", this.onKeyDown), e2.removeEventListener("keyup", this.onKeyUp), this.hotKeys = null, this.pressedKeys = null;
            }
            getInitialFocusDate() {
              let { focusDate: e2, currentView: t2, selectedDates: s2, parsedViewDate: { year: a2, month: n2 } } = this.dp, r2 = e2 || s2[s2.length - 1];
              if (!r2)
                switch (t2) {
                  case i.days:
                    r2 = new Date(a2, n2, (/* @__PURE__ */ new Date()).getDate());
                    break;
                  case i.months:
                    r2 = new Date(a2, n2, 1);
                    break;
                  case i.years:
                    r2 = new Date(a2, 0, 1);
                }
              return r2;
            }
            focusNextCell(e2) {
              let t2 = this.getInitialFocusDate(), { currentView: s2 } = this.dp, { days: a2, months: n2, years: r2 } = i, o2 = h(t2), l2 = o2.year, d2 = o2.month, c2 = o2.date;
              switch (e2) {
                case "ArrowLeft":
                  s2 === a2 && (c2 -= 1), s2 === n2 && (d2 -= 1), s2 === r2 && (l2 -= 1);
                  break;
                case "ArrowUp":
                  s2 === a2 && (c2 -= 7), s2 === n2 && (d2 -= 3), s2 === r2 && (l2 -= 4);
                  break;
                case "ArrowRight":
                  s2 === a2 && (c2 += 1), s2 === n2 && (d2 += 1), s2 === r2 && (l2 += 1);
                  break;
                case "ArrowDown":
                  s2 === a2 && (c2 += 7), s2 === n2 && (d2 += 3), s2 === r2 && (l2 += 4);
              }
              let u2 = this.dp.getClampedDate(new Date(l2, d2, c2));
              this.dp.setFocusDate(u2, { viewDateTransition: true });
            }
            registerKey(e2) {
              this.pressedKeys.add(e2);
            }
            removeKey(e2) {
              this.pressedKeys.delete(e2);
            }
          }
          let N = { on(e2, t2) {
            this.__events || (this.__events = {}), this.__events[e2] ? this.__events[e2].push(t2) : this.__events[e2] = [t2];
          }, off(e2, t2) {
            this.__events && this.__events[e2] && (this.__events[e2] = this.__events[e2].filter((e3) => e3 !== t2));
          }, removeAllEvents() {
            this.__events = {};
          }, trigger(e2) {
            for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), s2 = 1; s2 < t2; s2++)
              i2[s2 - 1] = arguments[s2];
            this.__events && this.__events[e2] && this.__events[e2].forEach((e3) => {
              e3(...i2);
            });
          } };
          function I(e2, t2, i2) {
            return (t2 = function(e3) {
              var t3 = function(e4, t4) {
                if ("object" != typeof e4 || null === e4)
                  return e4;
                var i3 = e4[Symbol.toPrimitive];
                if (void 0 !== i3) {
                  var s2 = i3.call(e4, "string");
                  if ("object" != typeof s2)
                    return s2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e4);
              }(e3);
              return "symbol" == typeof t3 ? t3 : String(t3);
            }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
          }
          let P = "", j = "", B = false;
          class R {
            static buildGlobalContainer(e2) {
              B = true, P = n({ className: e2, id: e2 }), a("body").appendChild(P);
            }
            constructor(e2, t2) {
              var r2 = this;
              if (I(this, "viewIndexes", [i.days, i.months, i.years]), I(this, "next", () => {
                let { year: e3, month: t3 } = this.parsedViewDate;
                switch (this.currentView) {
                  case i.days:
                    this.setViewDate(new Date(e3, t3 + 1, 1));
                    break;
                  case i.months:
                    this.setViewDate(new Date(e3 + 1, t3, 1));
                    break;
                  case i.years:
                    this.setViewDate(new Date(e3 + 10, 0, 1));
                }
              }), I(this, "prev", () => {
                let { year: e3, month: t3 } = this.parsedViewDate;
                switch (this.currentView) {
                  case i.days:
                    this.setViewDate(new Date(e3, t3 - 1, 1));
                    break;
                  case i.months:
                    this.setViewDate(new Date(e3 - 1, t3, 1));
                    break;
                  case i.years:
                    this.setViewDate(new Date(e3 - 10, 0, 1));
                }
              }), I(this, "_finishHide", () => {
                this.hideAnimation = false, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
              }), I(this, "setPosition", function(e3) {
                let t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if ("function" == typeof (e3 = e3 || r2.opts.position))
                  return void (r2.customHide = e3({ $datepicker: r2.$datepicker, $target: r2.$el, $pointer: r2.$pointer, isViewChange: t3, done: r2._finishHide }));
                let i2, s2, { isMobile: a2 } = r2.opts, n2 = r2.$el.getBoundingClientRect(), o3 = r2.$el.getBoundingClientRect(), h2 = r2.$datepicker.offsetParent, l3 = r2.$el.offsetParent, d2 = r2.$datepicker.getBoundingClientRect(), c2 = e3.split(" "), u2 = window.scrollY, p2 = window.scrollX, m2 = r2.opts.offset, v2 = c2[0], g2 = c2[1];
                if (a2)
                  r2.$datepicker.style.cssText = "left: 50%; top: 50%";
                else {
                  if (h2 === l3 && h2 !== document.body && (o3 = { top: r2.$el.offsetTop, left: r2.$el.offsetLeft, width: n2.width, height: r2.$el.offsetHeight }, u2 = 0, p2 = 0), h2 !== l3 && h2 !== document.body) {
                    let e4 = h2.getBoundingClientRect();
                    o3 = { top: n2.top - e4.top, left: n2.left - e4.left, width: n2.width, height: n2.height }, u2 = 0, p2 = 0;
                  }
                  switch (v2) {
                    case "top":
                      i2 = o3.top - d2.height - m2;
                      break;
                    case "right":
                      s2 = o3.left + o3.width + m2;
                      break;
                    case "bottom":
                      i2 = o3.top + o3.height + m2;
                      break;
                    case "left":
                      s2 = o3.left - d2.width - m2;
                  }
                  switch (g2) {
                    case "top":
                      i2 = o3.top;
                      break;
                    case "right":
                      s2 = o3.left + o3.width - d2.width;
                      break;
                    case "bottom":
                      i2 = o3.top + o3.height - d2.height;
                      break;
                    case "left":
                      s2 = o3.left;
                      break;
                    case "center":
                      /left|right/.test(v2) ? i2 = o3.top + o3.height / 2 - d2.height / 2 : s2 = o3.left + o3.width / 2 - d2.width / 2;
                  }
                  r2.$datepicker.style.cssText = `left: ${s2 + p2}px; top: ${i2 + u2}px`;
                }
              }), I(this, "_setInputValue", () => {
                let { opts: e3, $altField: t3, locale: { dateFormat: i2 } } = this, { altFieldDateFormat: s2, altField: a2 } = e3;
                a2 && t3 && (t3.value = this._getInputValue(s2)), this.$el.value = this._getInputValue(i2);
              }), I(this, "_getInputValue", (e3) => {
                let { selectedDates: t3, opts: i2 } = this, { multipleDates: s2, multipleDatesSeparator: a2 } = i2;
                if (!t3.length)
                  return "";
                let n2 = "function" == typeof e3, r3 = n2 ? e3(s2 ? t3 : t3[0]) : t3.map((t4) => this.formatDate(t4, e3));
                return r3 = n2 ? r3 : r3.join(a2), r3;
              }), I(this, "_checkIfDateIsSelected", function(e3) {
                let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days, s2 = false;
                return r2.selectedDates.some((i2) => {
                  let a2 = p(e3, i2, t3);
                  return s2 = a2 && i2, a2;
                }), s2;
              }), I(this, "_scheduleCallAfterTransition", (e3) => {
                this._cancelScheduledCall(), e3 && e3(false), this._onTransitionEnd = () => {
                  e3 && e3(true);
                }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, { once: true });
              }), I(this, "_cancelScheduledCall", () => {
                this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
              }), I(this, "setViewDate", (e3) => {
                if (!((e3 = b(e3)) instanceof Date))
                  return;
                if (p(e3, this.viewDate))
                  return;
                let t3 = this.viewDate;
                this.viewDate = e3;
                let { onChangeViewDate: s2 } = this.opts;
                if (s2) {
                  let { month: e4, year: t4 } = this.parsedViewDate;
                  s2({ month: e4, year: t4, decade: this.curDecade });
                }
                this.trigger(i.eventChangeViewDate, e3, t3);
              }), I(this, "setFocusDate", function(e3) {
                let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (!e3 || (e3 = b(e3)) instanceof Date) && (r2.focusDate = e3, r2.trigger(i.eventChangeFocusDate, e3, t3));
              }), I(this, "setCurrentView", function(e3) {
                let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (r2.viewIndexes.includes(e3)) {
                  if (r2.currentView = e3, r2.elIsInput && r2.visible && r2.setPosition(void 0, true), r2.trigger(i.eventChangeCurrentView, e3), !r2.views[e3]) {
                    let t4 = r2.views[e3] = new T({ dp: r2, opts: r2.opts, type: e3 });
                    r2.shouldUpdateDOM && r2.$content.appendChild(t4.$el);
                  }
                  r2.opts.onChangeView && !t3.silent && r2.opts.onChangeView(e3);
                }
              }), I(this, "_updateLastSelectedDate", (e3) => {
                this.lastSelectedDate = e3, this.trigger(i.eventChangeLastSelectedDate, e3);
              }), I(this, "destroy", () => {
                let { showEvent: e3, isMobile: t3 } = this.opts, i2 = this.$datepicker.parentNode;
                i2 && i2.removeChild(this.$datepicker), this.$el.removeEventListener(e3, this._onFocus), this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), t3 && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), this.views = null, this.nav = null, this.$datepicker = null, this.opts = null, this.$customContainer = null, this.viewDate = null, this.focusDate = null, this.selectedDates = null, this.rangeDateFrom = null, this.rangeDateTo = null;
              }), I(this, "update", function() {
                let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s2 = w({}, r2.opts), { silent: a2 } = t3;
                w(r2.opts, e3);
                let { timepicker: n2, buttons: o3, range: h2, selectedDates: l3, isMobile: d2 } = r2.opts, c2 = r2.visible || r2.treatAsInline;
                r2._createMinMaxDates(), r2._limitViewDateByMaxMinDates(), r2._handleLocale(), l3 && (r2.selectedDates = [], r2.selectDate(l3, { silent: a2 })), e3.view && r2.setCurrentView(e3.view, { silent: a2 }), r2._setInputValue(), s2.range && !h2 ? (r2.rangeDateTo = false, r2.rangeDateFrom = false) : !s2.range && h2 && r2.selectedDates.length && (r2.rangeDateFrom = r2.selectedDates[0], r2.rangeDateTo = r2.selectedDates[1]), s2.timepicker && !n2 ? (c2 && r2.timepicker.destroy(), r2.timepicker = false, r2.$timepicker.parentNode.removeChild(r2.$timepicker)) : !s2.timepicker && n2 && r2._addTimepicker(), !s2.buttons && o3 ? r2._addButtons() : s2.buttons && !o3 ? (r2.buttons.destroy(), r2.$buttons.parentNode.removeChild(r2.$buttons)) : c2 && s2.buttons && o3 && r2.buttons.clearHtml().render(), !s2.isMobile && d2 ? (r2.treatAsInline || j || r2._createMobileOverlay(), r2._addMobileAttributes(), r2.visible && r2._showMobileOverlay()) : s2.isMobile && !d2 && (r2._removeMobileAttributes(), r2.visible && (j.classList.remove("-active-"), "function" != typeof r2.opts.position && r2.setPosition())), c2 && (r2.nav.update(), r2.views[r2.currentView].render(), r2.currentView === i.days && r2.views[r2.currentView].renderDayNames());
              }), I(this, "disableDate", (e3, t3) => {
                (Array.isArray(e3) ? e3 : [e3]).forEach((e4) => {
                  let i2 = b(e4);
                  if (!i2)
                    return;
                  let s2 = t3 ? "delete" : "add";
                  this.disabledDates[s2](this.formatDate(i2, "yyyy-MM-dd"));
                  let a2 = this.getCell(i2, this.currentViewSingular);
                  a2 && a2.adpCell.render();
                }, []);
              }), I(this, "enableDate", (e3) => {
                this.disableDate(e3, true);
              }), I(this, "isDateDisabled", (e3) => {
                let t3 = b(e3);
                return this.disabledDates.has(this.formatDate(t3, "yyyy-MM-dd"));
              }), I(this, "isOtherMonth", (e3) => {
                let { month: t3 } = h(e3);
                return t3 !== this.parsedViewDate.month;
              }), I(this, "isOtherYear", (e3) => {
                let { year: t3 } = h(e3);
                return t3 !== this.parsedViewDate.year;
              }), I(this, "isOtherDecade", (e3) => {
                let { year: t3 } = h(e3), [i2, s2] = c(this.viewDate);
                return t3 < i2 || t3 > s2;
              }), I(this, "_onChangeSelectedDate", (e3) => {
                let { silent: t3 } = e3;
                setTimeout(() => {
                  this._setInputValue(), this.opts.onSelect && !t3 && this._triggerOnSelect();
                });
              }), I(this, "_onChangeFocusedDate", function(e3) {
                let { viewDateTransition: t3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e3)
                  return;
                let i2 = false;
                t3 && (i2 = r2.isOtherMonth(e3) || r2.isOtherYear(e3) || r2.isOtherDecade(e3)), i2 && r2.setViewDate(e3), r2.opts.onFocus && r2.opts.onFocus({ datepicker: r2, date: e3 });
              }), I(this, "_onChangeTime", (e3) => {
                let { hours: t3, minutes: i2 } = e3, s2 = /* @__PURE__ */ new Date(), { lastSelectedDate: a2, opts: { onSelect: n2 } } = this, r3 = a2;
                a2 || (r3 = s2);
                let o3 = this.getCell(r3, this.currentViewSingular), h2 = o3 && o3.adpCell;
                h2 && h2.isDisabled || (r3.setHours(t3), r3.setMinutes(i2), a2 ? (this._setInputValue(), n2 && this._triggerOnSelect()) : this.selectDate(r3));
              }), I(this, "_onFocus", (e3) => {
                this.visible || this.show();
              }), I(this, "_onBlur", (e3) => {
                this.inFocus || !this.visible || this.opts.isMobile || this.hide();
              }), I(this, "_onMouseDown", (e3) => {
                this.inFocus = true;
              }), I(this, "_onMouseUp", (e3) => {
                this.inFocus = false, this.$el.focus();
              }), I(this, "_onResize", () => {
                this.visible && "function" != typeof this.opts.position && this.setPosition();
              }), I(this, "_onClickOverlay", () => {
                this.visible && this.hide();
              }), I(this, "getViewDates", function() {
                let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
                return T.getDatesFunction(e3)(r2);
              }), I(this, "isWeekend", (e3) => this.opts.weekends.includes(e3)), I(this, "getClampedDate", (e3) => {
                let { minDate: t3, maxDate: i2 } = this, s2 = e3;
                return i2 && m(e3, i2) ? s2 = i2 : t3 && v(e3, t3) && (s2 = t3), s2;
              }), this.$el = a(e2), !this.$el)
                return;
              this.$datepicker = n({ className: "air-datepicker" }), this.opts = w({}, s, t2), this.$customContainer = !!this.opts.container && a(this.opts.container), this.$altField = a(this.opts.altField || false);
              let { view: o2, startDate: l2 } = this.opts;
              l2 || (this.opts.startDate = /* @__PURE__ */ new Date()), "INPUT" === this.$el.nodeName && (this.elIsInput = true), this.inited = false, this.visible = false, this.viewDate = b(this.opts.startDate), this.focusDate = false, this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = false, this.currentView = o2, this.selectedDates = [], this.disabledDates = /* @__PURE__ */ new Set(), this.views = {}, this.keys = [], this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = false, this.treatAsInline = this.opts.inline || !this.elIsInput, this.init();
            }
            init() {
              let { opts: e2, treatAsInline: t2, opts: { inline: i2, isMobile: s2, selectedDates: n2, keyboardNav: r2, onlyTimepicker: o2 } } = this, h2 = a("body");
              (!B || B && P && !h2.contains(P)) && !i2 && this.elIsInput && !this.$customContainer && R.buildGlobalContainer(R.defaultGlobalContainerId), !s2 || j || t2 || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (i2 || this._bindEvents(), r2 && !o2 && (this.keyboardNav = new A({ dp: this, opts: e2 }))), n2 && this.selectDate(n2, { silent: true }), this.opts.visible && !t2 && this.show(), s2 && !t2 && this.$el.setAttribute("readonly", true), t2 && this._createComponents();
            }
            _createMobileOverlay() {
              j = n({ className: "air-datepicker-overlay" }), P.appendChild(j);
            }
            _createComponents() {
              let { opts: e2, treatAsInline: t2, opts: { inline: i2, buttons: s2, timepicker: a2, position: n2, classes: r2, onlyTimepicker: o2, isMobile: h2 } } = this;
              this._buildBaseHtml(), this.elIsInput && (i2 || this._setPositionClasses(n2)), !i2 && this.elIsInput || this.$datepicker.classList.add("-inline-"), r2 && this.$datepicker.classList.add(...r2.split(" ")), o2 && this.$datepicker.classList.add("-only-timepicker-"), h2 && !t2 && this._addMobileAttributes(), this.views[this.currentView] = new T({ dp: this, type: this.currentView, opts: e2 }), this.nav = new V({ dp: this, opts: e2 }), a2 && this._addTimepicker(), s2 && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), this.$nav.appendChild(this.nav.$el);
            }
            _destroyComponents() {
              for (let e2 in this.views)
                this.views[e2].destroy();
              this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
            }
            _addMobileAttributes() {
              j.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), this.$el.setAttribute("readonly", true);
            }
            _removeMobileAttributes() {
              j.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
            }
            _createMinMaxDates() {
              let { minDate: e2, maxDate: t2 } = this.opts;
              this.minDate = !!e2 && b(e2), this.maxDate = !!t2 && b(t2);
            }
            _addTimepicker() {
              this.$timepicker = n({ className: "air-datepicker--time" }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({ dp: this, opts: this.opts }), this.$timepicker.appendChild(this.timepicker.$el);
            }
            _addButtons() {
              this.$buttons = n({ className: "air-datepicker--buttons" }), this.$datepicker.appendChild(this.$buttons), this.buttons = new H({ dp: this, opts: this.opts }), this.$buttons.appendChild(this.buttons.$el);
            }
            _bindSubEvents() {
              this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), this.on(i.eventChangeTime, this._onChangeTime);
            }
            _buildBaseHtml() {
              let { inline: e2 } = this.opts;
              var t2, i2;
              this.elIsInput ? e2 ? (t2 = this.$datepicker, (i2 = this.$el).parentNode.insertBefore(t2, i2.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', this.$content = a(".air-datepicker--content", this.$datepicker), this.$pointer = a(".air-datepicker--pointer", this.$datepicker), this.$nav = a(".air-datepicker--navigation", this.$datepicker);
            }
            _handleLocale() {
              let { locale: e2, dateFormat: t2, firstDay: i2, timepicker: s2, onlyTimepicker: a2, timeFormat: n2, dateTimeSeparator: r2 } = this.opts;
              var o2;
              this.locale = (o2 = e2, JSON.parse(JSON.stringify(o2))), t2 && (this.locale.dateFormat = t2), void 0 !== n2 && "" !== n2 && (this.locale.timeFormat = n2);
              let { timeFormat: h2 } = this.locale;
              if ("" !== i2 && (this.locale.firstDay = i2), s2 && "function" != typeof t2) {
                let e3 = h2 ? r2 : "";
                this.locale.dateFormat = [this.locale.dateFormat, h2 || ""].join(e3);
              }
              a2 && "function" != typeof t2 && (this.locale.dateFormat = this.locale.timeFormat);
            }
            _setPositionClasses(e2) {
              if ("function" == typeof e2)
                return void this.$datepicker.classList.add("-custom-position-");
              let t2 = (e2 = e2.split(" "))[0], i2 = `air-datepicker -${t2}-${e2[1]}- -from-${t2}-`;
              this.$datepicker.classList.add(...i2.split(" "));
            }
            _bindEvents() {
              this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), window.addEventListener("resize", this._onResize);
            }
            _limitViewDateByMaxMinDates() {
              let { viewDate: e2, minDate: t2, maxDate: i2 } = this;
              i2 && m(e2, i2) && this.setViewDate(i2), t2 && v(e2, t2) && this.setViewDate(t2);
            }
            formatDate() {
              let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate, t2 = arguments.length > 1 ? arguments[1] : void 0;
              if (e2 = b(e2), !(e2 instanceof Date))
                return;
              let i2 = t2, s2 = this.locale, a2 = h(e2), n2 = a2.dayPeriod, r2 = c(e2), o2 = R.replacer, l2 = { T: e2.getTime(), m: a2.minutes, mm: a2.fullMinutes, h: a2.hours12, hh: a2.fullHours12, H: a2.hours, HH: a2.fullHours, aa: n2, AA: n2.toUpperCase(), E: s2.daysShort[a2.day], EEEE: s2.days[a2.day], d: a2.date, dd: a2.fullDate, M: a2.month + 1, MM: a2.fullMonth, MMM: s2.monthsShort[a2.month], MMMM: s2.months[a2.month], yy: a2.year.toString().slice(-2), yyyy: a2.year, yyyy1: r2[0], yyyy2: r2[1] };
              for (let [e3, t3] of Object.entries(l2))
                i2 = o2(i2, k(e3), t3);
              return i2;
            }
            down(e2) {
              this._handleUpDownActions(e2, "down");
            }
            up(e2) {
              this._handleUpDownActions(e2, "up");
            }
            selectDate(e2) {
              let t2, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { currentView: a2, parsedViewDate: n2, selectedDates: r2 } = this, { updateTime: o2 } = s2, { moveToOtherMonthsOnSelect: h2, moveToOtherYearsOnSelect: l2, multipleDates: d2, range: c2, autoClose: u2, onBeforeSelect: p2 } = this.opts, v2 = r2.length;
              if (Array.isArray(e2))
                return e2.forEach((e3) => {
                  this.selectDate(e3, s2);
                }), new Promise((e3) => {
                  setTimeout(e3);
                });
              if ((e2 = b(e2)) instanceof Date) {
                if (p2 && !p2({ date: e2, datepicker: this }))
                  return Promise.resolve();
                if (a2 === i.days && e2.getMonth() !== n2.month && h2 && (t2 = new Date(e2.getFullYear(), e2.getMonth(), 1)), a2 === i.years && e2.getFullYear() !== n2.year && l2 && (t2 = new Date(e2.getFullYear(), 0, 1)), t2 && this.setViewDate(t2), d2 && !c2) {
                  if (v2 === d2)
                    return;
                  this._checkIfDateIsSelected(e2) || r2.push(e2);
                } else if (c2)
                  switch (v2) {
                    case 1:
                      r2.push(e2), this.rangeDateTo || (this.rangeDateTo = e2), m(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, this.rangeDateFrom = e2), this.selectedDates = [this.rangeDateFrom, this.rangeDateTo];
                      break;
                    case 2:
                      this.selectedDates = [e2], this.rangeDateFrom = e2, this.rangeDateTo = "";
                      break;
                    default:
                      this.selectedDates = [e2], this.rangeDateFrom = e2;
                  }
                else
                  this.selectedDates = [e2];
                return this.trigger(i.eventChangeSelectedDate, { action: i.actionSelectDate, silent: null == s2 ? void 0 : s2.silent, date: e2, updateTime: o2 }), this._updateLastSelectedDate(e2), u2 && !this.timepickerIsActive && this.visible && (d2 || c2 ? c2 && 1 === v2 && this.hide() : this.hide()), new Promise((e3) => {
                  setTimeout(e3);
                });
              }
            }
            unselectDate(e2) {
              let t2 = this.selectedDates, s2 = this;
              if ((e2 = b(e2)) instanceof Date)
                return t2.some((a2, n2) => {
                  if (p(a2, e2))
                    return t2.splice(n2, 1), s2.selectedDates.length ? s2._updateLastSelectedDate(s2.selectedDates[s2.selectedDates.length - 1]) : (s2.rangeDateFrom = "", s2.rangeDateTo = "", s2._updateLastSelectedDate(false)), this.trigger(i.eventChangeSelectedDate, { action: i.actionUnselectDate, date: e2 }), true;
                });
            }
            replaceDate(e2, t2) {
              let s2 = this.selectedDates.find((t3) => p(t3, e2, this.currentView)), a2 = this.selectedDates.indexOf(s2);
              a2 < 0 || p(this.selectedDates[a2], t2, this.currentView) || (this.selectedDates[a2] = t2, this.trigger(i.eventChangeSelectedDate, { action: i.actionSelectDate, date: t2, updateTime: true }), this._updateLastSelectedDate(t2));
            }
            clear() {
              let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return this.selectedDates = [], this.rangeDateFrom = false, this.rangeDateTo = false, this.lastSelectedDate = false, this.trigger(i.eventChangeSelectedDate, { action: i.actionUnselectDate, silent: e2.silent }), new Promise((e3) => {
                setTimeout(e3);
              });
            }
            show() {
              let { onShow: e2, isMobile: t2 } = this.opts;
              this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), this.visible = true, e2 && this._scheduleCallAfterTransition(e2), t2 && this._showMobileOverlay();
            }
            hide() {
              let { onHide: e2, isMobile: t2 } = this.opts, i2 = this._hasTransition();
              this.visible = false, this.hideAnimation = true, this.$datepicker.classList.remove("-active-"), this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition((t3) => {
                !this.customHide && (t3 && i2 || !t3 && !i2) && this._finishHide(), e2 && e2(t3);
              }), t2 && j.classList.remove("-active-");
            }
            _triggerOnSelect() {
              let e2 = [], t2 = [], { selectedDates: i2, locale: s2, opts: { onSelect: a2, multipleDates: n2, range: r2 } } = this, o2 = n2 || r2, h2 = "function" == typeof s2.dateFormat;
              i2.length && (e2 = i2.map(g), t2 = h2 ? n2 ? s2.dateFormat(e2) : e2.map((e3) => s2.dateFormat(e3)) : e2.map((e3) => this.formatDate(e3, s2.dateFormat))), a2({ date: o2 ? e2 : e2[0], formattedDate: o2 ? t2 : t2[0], datepicker: this });
            }
            _handleAlreadySelectedDates(e2, t2) {
              let { selectedDates: i2, rangeDateFrom: s2, rangeDateTo: a2 } = this, { range: n2, toggleSelected: r2 } = this.opts, o2 = i2.length, h2 = "function" == typeof r2 ? r2({ datepicker: this, date: t2 }) : r2, l2 = Boolean(n2 && 1 === o2 && e2), d2 = l2 ? g(t2) : t2;
              n2 && !h2 && (2 !== o2 && this.selectDate(d2), 2 === o2 && p(s2, a2)) || (h2 ? this.unselectDate(d2) : this._updateLastSelectedDate(l2 ? d2 : e2));
            }
            _handleUpDownActions(e2, t2) {
              if (!((e2 = b(e2 || this.focusDate || this.viewDate)) instanceof Date))
                return;
              let i2 = "up" === t2 ? this.viewIndex + 1 : this.viewIndex - 1;
              i2 > 2 && (i2 = 2), i2 < 0 && (i2 = 0), this.setViewDate(new Date(e2.getFullYear(), e2.getMonth(), 1)), this.setCurrentView(this.viewIndexes[i2]);
            }
            getCell(e2) {
              let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
              if (!((e2 = b(e2)) instanceof Date))
                return;
              let { year: s2, month: a2, date: n2 } = h(e2), r2 = `[data-year="${s2}"]`, o2 = `[data-month="${a2}"]`, l2 = { [i.day]: `${r2}${o2}[data-date="${n2}"]`, [i.month]: `${r2}${o2}`, [i.year]: `${r2}` };
              return this.views[this.currentView] ? this.views[this.currentView].$el.querySelector(l2[t2]) : void 0;
            }
            _showMobileOverlay() {
              j.classList.add("-active-");
            }
            _hasTransition() {
              return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce((e2, t2) => parseFloat(t2) + e2, 0) > 0;
            }
            get shouldUpdateDOM() {
              return this.visible || this.treatAsInline;
            }
            get parsedViewDate() {
              return h(this.viewDate);
            }
            get currentViewSingular() {
              return this.currentView.slice(0, -1);
            }
            get curDecade() {
              return c(this.viewDate);
            }
            get viewIndex() {
              return this.viewIndexes.indexOf(this.currentView);
            }
            get isFinalView() {
              return this.currentView === i.years;
            }
            get hasSelectedDates() {
              return this.selectedDates.length > 0;
            }
            get isMinViewReached() {
              return this.currentView === this.opts.minView || this.currentView === i.days;
            }
            get $container() {
              return this.$customContainer || P;
            }
            static replacer(e2, t2, i2) {
              return e2.replace(t2, function(e3, t3, s2, a2) {
                return t3 + i2 + a2;
              });
            }
          }
          var K;
          return I(R, "defaults", s), I(R, "version", "3.5.0"), I(R, "defaultGlobalContainerId", "air-datepicker-global-container"), K = R.prototype, Object.assign(K, N), t.default;
        }();
      });
    }
  });

  // node_modules/air-datepicker/locale/ko.js
  var require_ko = __commonJS({
    "node_modules/air-datepicker/locale/ko.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = {
        days: ["\uC77C\uC694\uC77C", "\uC6D4\uC694\uC77C", "\uD654\uC694\uC77C", "\uC218\uC694\uC77C", "\uBAA9\uC694\uC77C", "\uAE08\uC694\uC77C", "\uD1A0\uC694\uC77C"],
        daysShort: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
        daysMin: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
        months: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"],
        monthsShort: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"],
        today: "\uC624\uB298",
        clear: "\uCD08\uAE30\uD654",
        dateFormat: "MM/dd/yyyy",
        timeFormat: "hh:mm aa",
        firstDay: 0
      };
      exports.default = _default;
    }
  });

  // theme/fun.js
  var import_air_datepicker = __toESM(require_air_datepicker());
  var import_ko = __toESM(require_ko());
  var users = document.getElementById("users");
  var filter = document.getElementById("filter");
  var store = [];
  var setLocalStorage = (key, value) => {
    return localStorage.setItem(key, value);
  };
  var getLocalStorage = (key) => {
    return localStorage.getItem(key);
  };
  var burritoHost = window.location.hostname;
  var listType = getLocalStorage("listType") || "to";
  var scoreType = getLocalStorage("scoreType") || "inc";
  new import_air_datepicker.default("#month-picker", {
    locale: import_ko.default,
    view: "months",
    minView: "months",
    dateFormat: "MMMM yyyy",
    onSelect: ({ date }) => {
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      console.log({ month, year });
      fetcher("monthlyScore", { listType, scoreType, month, year }).then((response) => {
        console.log(response);
        store = response;
        render();
      });
    }
  });
  var filterSwitch = document.getElementById("switchToFromInput");
  filterSwitch.checked = listType === "to" ? true : false;
  async function fetcher(type, { username, listType: listType2, scoreType: scoreType2, month, year }) {
    switch (type) {
      case "scoreboard": {
        const res = await fetch(`/api/scoreboard/${listType2}/${scoreType2}`);
        const json = await res.json();
        return json.data;
      }
      case "userStats": {
        const res = await fetch(`/api/userstats/${username}`);
        const json = await res.json();
        return json.data;
      }
      case "userScore": {
        const res = await fetch(`/api/userscore/${username}/${listType2}/${scoreType2}`);
        const json = await res.json();
        return json;
      }
      case "monthlyScore": {
        const res = await fetch(`/api/monthlyscore/${listType2}/${scoreType2}/${month}/${year}`);
        const json = await res.json();
        return json.data;
      }
    }
  }
  var getScoreBoard = async () => {
    store = await fetcher("scoreboard", { listType, scoreType });
    sortUsers();
    render();
  };
  getScoreBoard();
  filterSwitch.addEventListener("click", async (ev) => {
    const list = listType === "to" ? "from" : "to";
    listType = list;
    setLocalStorage("listType", list);
    store = await fetcher("scoreboard", { listType, scoreType });
    sortUsers();
    render();
  });
  function sortUsers(sort = false) {
    let data = store;
    if (sort)
      data.sort((a, b) => Math.sign(b.score - a.score));
    store = data.map((item, i) => {
      const mappedItem = Object.assign({}, item);
      const position = i + 1;
      mappedItem.last_position = "position" in mappedItem ? mappedItem.position : 0;
      mappedItem.position = position;
      return mappedItem;
    });
  }
  function displayItem(element, wait, rerender) {
    setTimeout(() => {
      element.classList.add("display");
      setTimeout(() => {
        element.classList.add("displayed");
        if (rerender) {
          setTimeout(() => {
            sortUsers();
            render(true);
          }, 1e3);
        }
      }, 300);
    }, wait);
  }
  async function displayStats(data, element) {
    const statsEl = element.querySelector(".scoreboard__user__stats");
    if (statsEl.classList.contains("display")) {
      statsEl.style.cssText = "height: 0px";
      statsEl.classList.remove("display");
    } else {
      const res = await fetcher("userStats", { username: data.username });
      addStats(res);
    }
  }
  function addStatsRow(user, container) {
    const html = `
        <li>
            <img class="avatar" width="30" height="30" src="${user.avatar}">
            <strong>${user.name}</strong>
            <span class="score mini good">${user.scoreinc}&nbsp;&nbsp;&nbsp;</span>
            <span class="score mini bad">${user.scoredec}&nbsp;&nbsp;&nbsp;</span>
        </li>
    `;
    container.appendChild(document.createRange().createContextualFragment(html));
  }
  function addUserInfo(user, container) {
    const html = `
<div class="scoreboard__user__stats__column" >

<div class="scoreboard__user__stats__title"><strong>\uC804\uCCB4</strong></div>
  <ol class="scoreboard__user__stats__list">
    <li>
      <strong>\uBC1B\uC740 \uB355</strong>
      <span class="score mini">${user.received}</span>
    </li>
    <li>
      <strong>\uC900 \uB355</strong>
      <span class="score mini">${user.given}</span>
    </li>
  </ol>
</div>

<div class="scoreboard__user__stats__column">
  <div class="scoreboard__user__stats__title"><strong>\uC624\uB298</strong></div>

  <ol class="scoreboard__user__stats__list">
    <li>
      <strong>\uBC1B\uC740 \uB355</strong>
      <span class="score mini">${user.receivedToday}</span>
    </li>
    <li>
      <strong>\uC900 \uB355</strong>
      <span class="score mini">${user.givenToday}</span>
    </li>
  </ol>
</div>`;
    container.innerHTML = html;
  }
  function addStats(data) {
    const element = document.getElementById(`user:${data.user.username}`);
    const statsEl = element.querySelector("[data-stats]");
    const infoEl = element.querySelector("[data-info]");
    const todayFromEl = element.querySelector("[data-today-from]");
    const todayToEl = element.querySelector("[data-today-to]");
    const fromEl = element.querySelector("[data-from]");
    const toEl = element.querySelector("[data-to]");
    fromEl.innerHTML = "";
    toEl.innerHTML = "";
    todayFromEl.innerHTML = "";
    todayToEl.innerHTML = "";
    addUserInfo(data.user, infoEl);
    if (data.givenToday) {
      data.givenToday.forEach((user) => addStatsRow(user, todayToEl));
    }
    if (data.receivedToday) {
      data.receivedToday.forEach((user) => addStatsRow(user, todayFromEl));
    }
    if (data.given) {
      data.given.forEach((user) => addStatsRow(user, toEl));
    }
    if (data.received) {
      data.received.forEach((user) => addStatsRow(user, fromEl));
    }
    requestAnimationFrame(() => {
      statsEl.classList.add("display");
      statsEl.style.cssText = `
            position: absolute;
            left: 0;
            right: 0;
            height: auto;
            transition: none;
        `;
      requestAnimationFrame(() => {
        const height = statsEl.getBoundingClientRect().height;
        statsEl.style.cssText = "";
        requestAnimationFrame(() => {
          statsEl.style.cssText = `height: ${height}px`;
        });
      });
    });
  }
  var level = (l) => Array(l).fill(burrito).join(" ");
  function createElement(data, display) {
    const element = document.createElement("article");
    element.className = "scoreboard__user";
    element.id = `user:${data.username}`;
    if (display) {
      element.className += " display";
    }
    element.setAttribute("data-uuid", data.username);
    element.setAttribute("data-score", data.score);
    element.innerHTML = `
 <div class="scoreboard__user__row scoreboard__user__summary">
<div><span class="score position mini">${data.position}.</span></div>

  <div>
    <img class="avatar" width="48" height="48" src="${data.avatar}" alt="">
  </div>
  <div class="displayname">${data.name}
<span data-element="level" class="level">${data.level ? level(data.level) : ""}</span>
</div>
  <div><span data-element="score" class="score">${data.score}</span></div>
</div>


<div class="scoreboard__user__stats" data-stats>


  <div class="scoreboard__user__stats__info" data-info>
  </div>


  <div class="scoreboard__user__stats__today">

    <div class="scoreboard__user__stats__column">
<div class="scoreboard__user__stats__title"><strong>\uC624\uB298 \uBC1B\uC740 \uB355</strong></div>
      <ol class="scoreboard__user__stats__list" data-today-from>
      </ol>
    </div>

    <div class="scoreboard__user__stats__column">
      <strong class="scoreboard__user__stats__title">\uC624\uB298 \uC900 \uB355</strong>
      <ol class="scoreboard__user__stats__list" data-today-to>
      </ol>
    </div>

  </div>


  <div class="scoreboard__user__stats__column">
    <strong class="scoreboard__user__stats__title">\uC804\uCCB4 \uBC1B\uC740 \uB355</strong>
    <ol class="scoreboard__user__stats__list" data-from>
    </ol>
  </div>

  <div class="scoreboard__user__stats__column">
    <strong class="scoreboard__user__stats__title">\uC804\uCCB4 \uC900 \uB355</strong>
    <ol class="scoreboard__user__stats__list" data-to>
    </ol>
  </div>

</div>
    `;
    element.querySelector(".scoreboard__user__summary").addEventListener("click", () => displayStats(data, element), false);
    return element;
  }
  function newPosition(element) {
    const newClass = " pulse animated";
    element.className += newClass;
    setTimeout(() => {
      element.className = element.className.replace(newClass, "").trim();
    }, 1e3);
  }
  function render(refresh) {
    const wait = 200;
    let currentWait = 0;
    users.innerHTML = "";
    const top20 = store.slice(0, 20);
    store.forEach((item) => {
      currentWait += wait;
      const element = createElement(item, refresh);
      users.appendChild(element);
      if (refresh) {
        if (item.last_position !== item.position) {
          newPosition(element);
        }
      } else {
        displayItem(element, currentWait);
      }
    });
  }
  function appendUser(data) {
    store.push(data);
    const element = createElement(data);
    users.appendChild(element);
    displayItem(element, 200, true);
  }
  function updateUser(data, direction, item, burritoType) {
    const score = data.score;
    const scoreEl = item.querySelector('[data-element="score"]');
    const className = direction === "up" ? " tada animated good" : " shake animated bad";
    item.setAttribute("data-score", score);
    scoreEl.innerHTML = score;
    let scoreUpdated = false;
    store = store.slice().map((user) => {
      let uppdatedUser = Object.assign({}, user);
      if (user.username === data.username && user.score !== data.score) {
        uppdatedUser.score = data.score;
        scoreUpdated = true;
      }
      return uppdatedUser;
    });
    if (scoreUpdated) {
      scoreEl.className += className;
      setTimeout(() => {
        scoreEl.className = scoreEl.className.replace(className, "").trim();
        setTimeout(() => {
          sortUsers(true);
          render(true);
        }, 1500);
      }, 1e3);
    }
  }
  function updateScore(data, direction, burritoType) {
    const item = document.querySelector(`[data-uuid="${data.username}"]`);
    if (item) {
      updateUser(data, direction, item, burritoType);
    } else {
      appendUser(data, burritoType);
    }
  }
  hey.on("GIVE", async (input) => {
    const username = input[listType];
    const { data } = await fetcher("userScore", {
      username,
      listType,
      scoreType
    });
    const direction = data.scoreType === "inc" ? "up" : "down";
    const burritoType = data.scoreType === "inc" ? "burrito" : "rottenburrito";
    updateScore(data, direction, burritoType);
  });
  hey.on("TAKE_AWAY", async (input) => {
    const username = input[listType];
    const { data } = await fetcher("userScore", {
      username,
      listType,
      scoreType
    });
    const direction = data.scoreType === "inc" ? "up" : "down";
    const burritoType = data.scoreType === "inc" ? "burrito" : "rottenburrito";
    updateScore(data, direction, burritoType);
  });
})();

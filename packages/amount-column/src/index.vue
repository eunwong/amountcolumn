<template>
  <div class="amount"
       :class="{amountBorder:border}"
       :style="{'--yaxis':yaxis+'px'}">
    <div class="header"
         v-if="head">
      <ul class="division">
        <li v-for="(item,index) in unit"
            :class="lineColor[index]"
            :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="content"
         v-if="input">
      <ul class="division">
        <li v-for="(item,index) in formatMoney"
            :class="lineColor[index]"
            :key="index"
            @click="focusBlinkhandler(index)"><span class="cursorInit"
                :class="{cursor:(cursor === index)}"
                style="cursor: text;">{{item}}</span></li>
      </ul>
    </div>

    <input ref="input"
           type="text"
           class="inputHidden"
           @blur="inputBlurHandler"
           @keyup="cursorKeyupHandler"
           @input="cursorInputHandler"
           v-model.trim="money">
  </div>

  </div>
</template>
<script>
export default {
  name: 'AmountColumn',
  data() {
    return {
      unit: ['亿', '千', '百', '十', '万', '千', '百', '十', '元', '角', '分'],
      lineColor: {
        3: 'blue',
        6: 'blue',
        9: 'red'
      },
      money: '',
      formatMoney: '           ',
      cursor: ''
    };
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    input: {
      type: Boolean,
      default: true
    },
    head: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    yaxis: {
      type: [String, Number],
      default: 0
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        let i = parseFloat(val);
        if (isNaN(i)) {
          i = '';
        } else {
          i = i.toFixed(2);
        }
        this.money = i;
        this.formatMoneyHandler();
      }
    }
  },
  methods: {
    inputBlurHandler() {
      const m = this.money;
      if (!m || m.trim() === '.') {
        this.cursor = '';
        this.money = '';
        return;
      }
      let num = parseFloat(m);
      if (isNaN(num)) {
        this.money = '0.00';
      } else {
        this.money = num.toFixed(2);
      }
      this.$emit('change', parseFloat(this.money));
      this.formatMoneyHandlerAndSetBlink();
      this.cursor = '';
    },
    /**补全小数位 */
    formatDecimalEvent(num) {
      let endNum = 0;
      if (num.lastIndexOf('.') !== -1) {
        endNum = num.length - num.lastIndexOf('.') - 1;
      } else {
        num += '.';
      }
      for (let i = 0; i < 2 - endNum; i++) {
        num = num + ' ';
      }
      return num;
    },
    formatMoneyHandlerAndSetBlink() {
      let val = this.money;
      let num = this.formatDecimalEvent(val);
      const input = this.$refs.input;
      const i = input.selectionStart;
      let f = this.insertStr(num, i, '|');
      const isJiao = f.includes('.|');
      f = f.replace('.', '');
      f = this.fixZeroStart(f, ' ', this.unit.length + 1);
      let len = 1;
      if (isJiao) {
        len = 0;
      }
      let blink = f.indexOf('|') - len;
      f = f.replace('|', '');
      this.cursor = blink;
      this.formatMoney = f;
    },
    formatMoneyHandler() {
      let val = this.money;
      let num = this.formatDecimalEvent(val);
      let f = this.fixZeroStart(num, ' ', this.unit.length + 1);
      f = f.replace('.', '');
      this.formatMoney = f;
    },
    cursorInputHandler() {
      let m = this.money;
      let s = m.split('.');
      const input = this.$refs.input;
      let i = input.selectionStart;
      let reBlink = false;
      if (!m.includes('.')) {
        reBlink = true;
      }
      const z = s[0] || '';
      const x = s[1] || '';
      this.money = z.substr(-9) + '.' + x.slice(0, 2);
      this.$nextTick(() => {
        if (z.length > 9) {
          i--;
          input.setSelectionRange(i, i);
        }
        if (reBlink) {
          input.setSelectionRange(i, i);
        }
        this.formatMoneyHandlerAndSetBlink();
      });
    },
    fixZeroStart(str, c, n) {
      return (Array(n).join(c) + str).slice(-n);
    },
    cursorKeyupHandler(e) {
      if (['Backspace', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        const a = this.$refs.input;
        let i = a.selectionStart;
        let num = this.formatDecimalEvent(this.money);
        let len = num.length;
        let f = this.insertStr(this.money, i, '|');
        if (
          (e.code === 'ArrowLeft' || e.code === 'Backspace') &&
          f.includes('.|')
        ) {
          i--;
        } else if (e.code === 'ArrowRight' && f.includes('.|')) {
          i++;
        }
        a.setSelectionRange(i, i);
        i = len - i;
        i > 1 && i--;
        this.cursor = 10 - i;
      }
    },
    insertStr(soure, start, newStr) {
      return soure.slice(0, start) + newStr + soure.slice(start);
    },
    focusBlinkhandler(index) {
      index = 10 - index;
      let len = this.money.length;
      if (index > 1) {
        index++;
      }
      index = len - index;
      if (index < 0) {
        index = 0;
      }
      let a = this.$refs.input;
      a.focus();
      a.setSelectionRange(index, index);
      this.formatMoneyHandlerAndSetBlink();
    }
  }
};
</script>

<style lang="css" scoped>
.amountBorder {
  border: 1px solid #ccc;
}
.amount {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.amount .inputHidden {
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
  padding: 0;
  border: 0;
}
.amount .header {
  flex-grow: 1;
  font-size: 14px;
  flex-basis: 0;
  flex-shrink: 0;
  flex-basis: 0;
}
.amount .header + .content {
  border-top: 1px solid #ccc;
}
.amount .content {
  flex-grow: 2;
  flex-shrink: 0;
  flex-basis: 0;
}
.amount .content .division {
  height: 100%;
  line-height: 100%;
}
.division {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.division li {
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  flex-shrink: 0;
}
.division li + li::before {
  position: absolute;
  content: '';
  display: block;
  height: calc(100% + var(--yaxis));
  width: 0;
  border-left: 1px solid #ccc;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.division li.blue::before {
  border-color: blue;
}
.division li.red::before {
  border-color: red;
}
.division li span {
  position: relative;
}
.division li span.cursor::after {
  position: absolute;
  width: 0;
  height: 1.5em;
  border-left: 2px solid #555;
  content: '';
  display: block;
  animation: blink 1s infinite steps(1, start);
  right: -5px;
  top: 50%;
  transform: translateY(-50%);
}

@keyframes blink {
  0%,
  100% {
    border-width: 0px;
  }
  50% {
    border-width: 2px;
  }
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
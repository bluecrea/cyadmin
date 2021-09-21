<template>
  <div class="status-content" dir="ltr" style="overflow: hidden scroll; padding-right: 8px;">
    <div class="form-group">
      <div class="section-title">
        <h5 class="color-standard">忙什么呢，zzhjsan?</h5>
      </div>
      <div class="children">
        <div class="input-container">
          <div class="emoji-button-container">
            <button tabindex="0" aria-label="选择表情符号" aria-expanded="false" type="button" class="emoji-button-normal emoji-button button">
              <div class="contents">
                <div class="sprite" style="background-size: 242px 110px; transform: scale(1); filter: grayscale(100%); background-position: -44px -22px;"></div>
              </div>
            </button>
          </div>
          <div class="input-wrapper">
            <input class="input" maxlength="128" placeholder="这道菜太赞啦！" name="" type="text" value="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount} from "vue"

export default defineComponent({
  name: "StatusForm",
  setup() {
    onBeforeMount(() => {
      let xPos = Math.floor(Math.random() * 10) * -22
      let yPos = Math.floor(Math.random() * 5) * -22
      if (xPos < -132 && yPos < -88) {
        xPos = Math.floor(Math.random() * 10) * -22
        yPos = Math.floor(Math.random() * 5) * -22
      }
      console.log(xPos, yPos)
     })
  }
})
</script>

<style lang="less" scoped>
.status-content {
  position: relative;
  z-index: 0;
  border-radius: 5px 5px 0 0;
  padding-left: 16px;
  padding-right: 16px;
  overflow-x: hidden;
  .form-group {
    margin-bottom: 20px;
  }
  .children, .section-title {
    display: flex;
  }
  .color-standard {
    color: var(--header-secondary);
    margin-bottom: 8px;
    flex: 1;
    font-size: 12px;
    line-height: 16px;
    cursor: default;
    font-family: var(--font-display);
    font-weight: 600;
    text-transform: uppercase;
  }
  .children {
    flex-direction: column;
    .input-container {
      position: relative;
      .emoji-button-container {
        display: flex;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        margin: 0 10px;
        height: 100%;
        .button {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          background: none;
          border: none;
          border-radius: 3px;
          font-size: 14px;
          font-weight: 500;
          line-height: 16px;
          padding: 2px 16px;
          user-select: none;
        }
        .emoji-button {
          width: auto;
          background: transparent;
          color: currentColor;
          border: 0;
          padding: 0;
          margin: 0;
          max-height: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .sprite {
        background-image: url('../../assets/images/status.png');
        background-position: 50%;
        background-repeat: no-repeat;
        width: 22px;
        height: 22px;
        display: block;
      }
      .input-wrapper{
        display: flex;
        flex-direction: column;
        .input {
          font-size: 16px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: 100%;
          border-radius: 3px;
          color: var(--text-normal);
          background-color: var(--deprecated-text-input-bg);
          border: 1px solid var(--deprecated-text-input-border);
          -webkit-transition: border-color .2s ease-in-out;
          transition: border-color .2s ease-in-out;
          padding: 10px 36px 10px 42px;
          height: 40px;
          &:focus {
            border-color: #FF9028;
          }
        }
      }
    }
  }
}
</style>
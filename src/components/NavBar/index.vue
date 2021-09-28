<template>
  <nav class="guilds">
    <ul class="guilds-tree">
      <div class="nav-scroller">
        <div class="tutorial-container">
          <div class="tutorial-container">
            <div class="list-item active">
              <div class="list-item-wrapper">
                <a-tooltip placement="right">
                  <template #title>
                    <span>主页</span>
                  </template>
                  <div class="circle-icon">
                    <svg width="24" height="24" viewBox="0 0 836 836">
                      <path fill="currentColor" d="M272.955,26.3564637 C455.591667,-33.553193 612.070273,9.70666799 742.390817,156.136047 C721.020079,228.840615 684.42256,286.982302 632.59826,330.561108 C505.749639,406.190967 444.556518,403.012623 310.396058,403.012623 C220.955751,403.012623 174.80245,447.040604 171.936156,535.096566 C147.837163,497.807424 144.472881,461.205145 161.84331,425.289729 C194.833862,373.187564 252.871573,346.64458 335.956444,345.660778 C487.056645,334.902781 591.455511,279.01356 649.153043,177.993115 C577.202822,106.572832 489.912664,75.2625135 387.282568,84.0621584 C327.635591,141.051632 314.184749,209.471673 346.93004,289.322282 C290.298845,244.707025 267.798185,187.006581 279.428061,116.220949 C215.544922,147.706157 166.941536,193.942923 133.617903,254.931249 C72.0644706,372.053842 74.6538112,476.63485 141.385925,568.674274 C243.090403,668.760728 351.732182,690.729353 467.31126,634.580146 C540.693485,595.74467 584.491771,531.71359 598.706118,442.486905 C635.158259,475.488963 658.99125,517.416125 670.205092,568.268394 C713.170341,544.340587 767.654321,483.000315 833.657034,384.24758 C834.552345,399.174264 835,410.42507 835,418 C835,648.855025 647.855025,836 417,836 C186.144975,836 -1,648.855025 -1,418 C-1,366.868498 17.3206815,297.175151 55.1273177,208.067959 C57.6581361,155.795338 45.9689715,104.298368 20.0598239,53.5770506 L20.0598239,53.5770506 L18.0562091,49.3865674 L19.61036,48.2889279 C100.574331,8.54824493 185.022544,1.23742353 272.955,26.3564637 Z M486.5,141 C514.39038,141 537,163.60962 537,191.5 C537,219.39038 514.39038,242 486.5,242 C458.60962,242 436,219.39038 436,191.5 C436,163.60962 458.60962,141 486.5,141 Z"></path>
                    </svg>
                  </div>
                </a-tooltip>
              </div>
            </div>
            <div class="list-item">
              <div class="guild-separator"/>
            </div>
            <div class="list-item">
              <div class="list-item-wrapper">
                <a-tooltip placement="right">
                  <template #title>
                    <span>发布作品</span>
                  </template>
                  <div class="circle-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"></path>
                    </svg>
                  </div>
                </a-tooltip>
              </div>
            </div>
            <div class="list-item">
              <div class="list-item-wrapper">
                <a-tooltip placement="right">
                  <template #title>
                    <span>我的收藏</span>
                  </template>
                  <div class="circle-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z"></path>                  </svg>
                  </div>
                </a-tooltip>
              </div>
            </div>
            <div class="list-item">
              <div class="list-item-wrapper">
                <a-tooltip placement="right">
                  <template #title>
                    <span>菜谱分类</span>
                  </template>
                  <div class="circle-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
                    </svg>
                  </div>
                </a-tooltip>
              </div>
            </div>
            <div class="list-item">
              <div class="list-item-wrapper">
                <a-tooltip placement="right">
                  <template #title>
                    <span>个人中心</span>
                  </template>
                  <div class="circle-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 11c-.965 0-1.75-.785-1.75-1.75S11.035 7.5 12 7.5s1.75.785 1.75 1.75S12.965 11 12 11m0-5.5a3.754 3.754 0 0 0-3.75 3.75A3.754 3.754 0 0 0 12 13a3.754 3.754 0 0 0 3.75-3.75A3.754 3.754 0 0 0 12 5.5m7.679 12.914c-1.987-2.104-4.727-3.289-7.679-3.289-2.953 0-5.692 1.185-7.679 3.289A9.955 9.955 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10a9.956 9.956 0 0 1-2.321 6.414M12 22a9.995 9.995 0 0 1-6.25-2.187c1.613-1.719 3.844-2.688 6.25-2.688s4.637.969 6.249 2.688A9.993 9.993 0 0 1 12 22m0-22C5.383 0 0 5.383 0 12c0 3.268 1.294 6.33 3.651 8.63l.012.013A12 12 0 0 0 12 24h.036a12.008 12.008 0 0 0 8.306-3.363C22.701 18.341 24 15.273 24 12c0-6.617-5.383-12-12-12"></path>
                    </svg>
                  </div>
                </a-tooltip>
              </div>
            </div>
            <div class="list-item">
              <div class="guild-separator"/>
            </div>
            <div class="list-item">
              <div class="list-item-wrapper">
                <a-tooltip placement="right">
                  <template #title>
                    <span>下载APP</span>
                  </template>
                  <div class="circle-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"></path>
                    </svg>
                  </div>
                </a-tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ul>
  </nav>
</template>

<style lang="less" scoped>
.nav-scroller {
  user-select: none;
  padding: 12px 0 0;
  contain: layout size;
  position: relative;
  box-sizing: border-box;
  min-height: 0;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  .tutorial-container {
    position: relative;
  }
  .list-item {
    position: relative;
    margin: 0 0 8px;
    display: flex;
    justify-content: center;
    width: 72px;
    &:before {
      content: '';
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      width: 8px;
      height: 48px;
      contain: layout size;
    }
    &:hover:before,&.active:before,&.active:hover:before {
      opacity: 1;
      height: 40px;
      transition: background-color .2s ease-out,color .2s ease-out;
      top: 4px;
      display: block;
      width: 8px;
      border-radius: 0 4px 4px 0;
      margin-left: -4px;
      background-color: var(--header-primary);
    }
    &:hover:before {
      height: 20px;
      top: 14px;
    }
    .list-item-wrapper {
      box-sizing: border-box;
      position: relative;
      width: 48px;
      height: 48px;
      cursor: pointer;
      .circle-icon {
        background-color: var(--background-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        color: #faa61a;
        transition: color .2s ease-out,background-color .2s ease-out,border-radius .15s ease-out;
      }
    }
    &.active .list-item-wrapper .circle-icon, .list-item-wrapper .circle-icon:hover {
      background-color: #F77F00;
      color: #fff;
      border-radius: 37%;
      transition: border-radius .15s ease-out;
    }
    .guild-separator {
      height: 2px;
      width: 32px;
      border-radius: 1px;
      background-color: var(--background-modifier-accent);
    }
  }
}
</style>
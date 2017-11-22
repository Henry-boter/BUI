<template>
    <div class="cl-checklist">
      <div class="topbar">
        <span class="cancel">取消</span>
        <span class="title">选择考场</span>
        <span class="confirm">完成</span>
      </div>
      <div class="desc">您已选中0个，最多已选3个</div>
      <div class="list">
        <div class="line">
          <div class="l">
            <div class="title">科目二第07考点马路</div>
            <div class="address">上海市宝山区宝安公路2009号</div>
          </div>
          <div class="r"></div>
        </div>

        <div class="line selected">
          <div class="l">
            <div class="title">科目二第07考点马路</div>
            <div class="address">上海市宝山区宝安公路2009号</div>
          </div>
          <div class="r"></div>
        </div>
      </div>
    </div>
</template>

<script>

</script>
<style scoped="scoped">
.topbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  font-size: 16px;
  padding: 0 13px;
  border-bottom: 1px solid rgb(217,217,217);
}
.topbar .cancel{
  color: rgb(159,159,159);
}
.topbar .confirm{
  color: rgb(46,166,242);
}
  .desc{
    height: 30px;
    line-height: 30px;
    padding-right: 10px;
    font-size: 14px;
    text-align: right;
    color: rgb(159,159,159);
  }
  .list{
    height: 300px;
    font-size: 14px;
    padding: 10px 13px;
    background-color: #00b4ff;
  }
  .list .line{
    display: flex;
    justify-content: center;
    align-items: center;
    /*height: 50px;*/
    background-color: #4caf50;
  }
  .list .line .l{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    background-color: red;
  }
  .list .line .r{
    width: 20px;
    height: 20px;
    margin: 0 5px;
    border-radius: 50%;
    border: 1px solid #9e9e9e;
    background-color: #fff;
    position: relative;
    z-index: 0;
  }
  .list .line.selected .l .title{
    color: #1799fa;
  }
  .list .line.selected .r{
    border: 1px solid #1799fa;
    background-color: #1799fa;
  }
  .list .line.selected .r::before{
    content: ' ';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
  }
</style>

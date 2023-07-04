<template>
    <div class="container">
    <h1 class="fw-light mt-2">Contact Us</h1>
    <hr>
    <div class="ag-format-container">
      <div class="ag-courses_box">
        <div class="ag-courses_item">
          <a href="https://github.com/DavideSberna" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">
              Davide Sberna
              <br><h4>Backend, Frontend Home & Category select</h4>
            </div>

            <div class="ag-courses-item_date-box">
              Role:
              <span class="ag-courses-item_date">
                Team Leader
              </span>
            </div>
          </a>
        </div>

         <div class="ag-courses_item">
          <a href="https://github.com/gianynx" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">
              Gianmarco Incocciati
              <br><h4>Laravel, Vue Home & Category</h4>
            </div>

            <div class="ag-courses-item_date-box">
              Role:
              <span class="ag-courses-item_date">
                Team Leader
              </span>
            </div>
          </a>
        </div>

         <div class="ag-courses_item">
          <a href="https://github.com/alessiologozzo" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">
              Alessio Logozzo
              <br><h4>Laravel, Database, Seeders & Models</h4>
            </div>

            <div class="ag-courses-item_date-box">
              Role:
              <span class="ag-courses-item_date">
                Backend Dev.
              </span>
            </div>
          </a>
        </div>
         <div class="ag-courses_item">
          <a href="https://github.com/JorgeLuix" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">
              Jorge Castillo
              <br><h4>Backend, Frontend show & debug</h4>
            </div>

            <div class="ag-courses-item_date-box">
              Role:
              <span class="ag-courses-item_date">
                Team Leader
              </span>
            </div>
          </a>
        </div>
         <div class="ag-courses_item">
          <a href="https://github.com/taddeoneri" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">
              Taddeo Neri
              <br><h4>Laravel, Vue Home & Category</h4>
            </div>

            <div class="ag-courses-item_date-box">
              Role:
              <span class="ag-courses-item_date">
                Team Leader
              </span>
            </div>
          </a>
        </div>
        <div class="ag-courses_item">
          <a href="https://github.com/GersonMembrillo" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">
              Gerson Membrillo
              <br><h4>Vue&Vite Index, Page Aesthetics</h4>
            </div>

            <div class="ag-courses-item_date-box">
              Role:
              <span class="ag-courses-item_date">
                Designer
              </span>
            </div>
          </a>
        </div>

      </div>
    </div>
        </div>



</template>

<script>


export default {
    name: 'ContactUs',
    data(){
        return{

        };
    },


}
</script>

<style lang="scss" scoped>
// .ag-format-container {
//   width: 1142px;
//   margin: 0 auto;
// }


body {
  background-color: #000;
}
.ag-courses_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 20px 0;
}
.ag-courses_item {
  -ms-flex-preferred-size: calc(33.33333% - 30px);
  flex-basis: calc(33.33333% - 30px);

  margin: 0 15px 30px;

  overflow: hidden;

  border-radius: 28px;
}
.ag-courses-item_link {
  display: block;
  padding: 30px 20px;
  background-color: #121212;
  text-decoration: none;

  overflow: hidden;

  position: relative;
}
.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #FFF;
}
.ag-courses-item_link:hover .ag-courses-item_bg {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}
.ag-courses-item_title {
  min-height: 87px;
  margin: 0 0 25px;

  overflow: hidden;

  font-weight: bold;
  font-size: 30px;
  color: #FFF;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date-box {
  font-size: 18px;
  color: #FFF;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date {
  font-weight: bold;
  color: #f9b234;

  -webkit-transition: color .5s ease;
  -o-transition: color .5s ease;
  transition: color .5s ease
}
.ag-courses-item_bg {
  height: 128px;
  width: 128px;
  background-color: #f9b234;

  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 50%;

  -webkit-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}
.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
  background-color: #3ecd5e;
}
.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
  background-color: #0059ff;
}
.ag-courses_item:nth-child(4n) .ag-courses-item_bg {
  background-color: #952aff;
}
.ag-courses_item:nth-child(5n) .ag-courses-item_bg {
  background-color: #ff0000;
}
.ag-courses_item:nth-child(6n) .ag-courses-item_bg {
  background-color: #c8ba00;
}



@media only screen and (max-width: 979px) {
  .ag-courses_item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
  }
  .ag-courses-item_title {
    font-size: 24px;
  }
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 96%;
  }

}
@media only screen and (max-width: 639px) {
  .ag-courses_item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .ag-courses-item_title {
    min-height: 72px;
    line-height: 1;

    font-size: 24px;
  }
  .ag-courses-item_link {
    padding: 22px 40px;
  }
  .ag-courses-item_date-box {
    font-size: 16px;
  }
}
</style>
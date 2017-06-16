<?php
$data = arg(0);
 ?>
<footer id="footer">
  <div class="row clearfix black_bg">
    <div class="container">
      <div class="content_wrap">
        <h3>Our Identity</h3>
        <h1>Behind the Brand</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <div class="wall_frame">
          <img src="../sites/all/themes/flatastic/images/12.jpg" alt="" width="423" height="793">
        </div>
      </div>
    </div>
  </div>
  <div class="container">
      <div class="row clearfix">
        <div class="col-lg-12 footer_wrap">
          <h1> Stay Connected with SpatikaSarees </h1>
          <input type="text" class="collect_mail" /><input class="sub_btn" type="submit" value="&nbsp;">
        </div>
      </div>
    </div>
  <div class="footer_top_part">
    <div class="container">
        <div class="row clearfix">
          <div class="col-lg-12">
                <?php if ($page['footer_2']) : print render($page['footer_2']); endif; ?>
          </div>
          <div class="footer_bottom_part">
              <div class="container clearfix t_mxs_align_c">
                  <?php
                  if ($page['footer_bottom']) :
                      print render($page['footer_bottom']);
                  endif;
                  ?>
              </div>
          </div>
        </div>
    </div>
  </div>

    <div class="footer_top_part" style="display:none;">
        <div class="container">
            <div class="row clearfix">
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30 f-style-1 a-style">
                    <?php if ($page['footer_1']) : print render($page['footer_1']); endif; ?>
                    <?php if($data != 'index-construction'): ?>
                        <?php if ($page['footer_top']) : print render($page['footer_top']); endif; ?>
                    <?php endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                    <?php if ($page['footer_2']) : print render($page['footer_2']); endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_30">
                    <?php if ($page['footer_3']) : print render($page['footer_3']); endif; ?>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 f-style-4">
                    <?php if($data == 'index-construction'): ?>
                        <?php if ($page['footer_6']) : print render($page['footer_6']); endif; ?>
                    <?php else: ?>
                        <?php if ($page['footer_4']) : print render($page['footer_4']); endif; ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>

    <!--copyright part-->
    <div class="footer_bottom_part" style="display:none;">
        <div class="container clearfix t_mxs_align_c">
            <?php
            if ($page['footer_bottom']) :
                print render($page['footer_bottom']);
            endif;
            ?>
        </div>
    </div>
</footer>

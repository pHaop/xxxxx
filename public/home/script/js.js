$(function(){
	//--首页焦点图（复杂特效）
	var indexPart1Now=0;
	var indexPart1Layer=$('.indexPart1').find('.sectionLayer');
	$('.indexPart1').find('.next').click(function(){
		if(indexPart1Now<indexPart1Layer.length-1){
			indexPart1Now++;
			}else{
				indexPart1Now=0;
				}
		indexPart1Layer.removeClass('on');
		indexPart1Layer.eq(indexPart1Now).addClass('on');
		indexPart1Layer.find('.msg').removeClass('on');
		indexPart1Layer.eq(indexPart1Now).find('.msg').addClass('on');
		if(indexPart1Now==1&&$('#bgvid').length>0){
			document.getElementById('bgvid').play();
			}
		})
	$('.indexPart1').find('.prev').click(function(){
		if(indexPart1Now>0){
			indexPart1Now--;
			}else{
				indexPart1Now=indexPart1Layer.length-1;
				}
		indexPart1Layer.removeClass('on');
		indexPart1Layer.eq(indexPart1Now).addClass('on');
		indexPart1Layer.find('.msg').removeClass('on');
		indexPart1Layer.eq(indexPart1Now).find('.msg').addClass('on');
		if(indexPart1Now==1&&$('#bgvid').length>0){
			document.getElementById('bgvid').play();
			}
		})
	//--打字效果
	//--选项卡
	$('.tabContentDiv').find('.tabContent:first').show();
	$('.tab').each(function(i){
		var _this=$(this);
		var tabContent=$('.tabContentDiv').eq(i).find('.tabContent');
		$(this).find('li').each(function(ii){
			$(this).click(
			function(){
				_this.find('li').removeClass('on');
				$(this).addClass('on');
				tabContent.hide();
				tabContent.eq(ii).show();
				}	
				)
			})
		})
	//--
	$('.listHover').find('li').hover(
	  function(){
		  $(this).addClass('on');
		  },
	  function(){
		  $(this).removeClass('on');
		  }
	)
	//--返回顶部
	$('.topA').click(function(){
		$('body,html').stop(true,true).animate({scrollTop:0}, 300);
		})
	//--js下拉选择框
	$('.select').each(function(){
		var _this=$(this);
		_this.find('select').change(function(){
			_this.find('span').html($(this).val());
			})
		})
	
	//--首页生态园（复杂特效）
	var indexProductBtn=$('.indexProduct').find('.btn');
	indexProductBtn.hover(
	  function(){
		  $(this).addClass('paused');
		  },
	  function(){
		  $(this).removeClass('paused');
		  }
	)
	var indexProductBtnLi=$('.indexProduct').find('.btn').find('li');
	indexProductBtnLi.each(function(i){
		$(this).click(function(){
			$('.indexProductDiv').addClass('on');
			indexProductBtn.removeClass('on');
			indexProductBtn.addClass('on2');
			$('.indexProduct').addClass('on');
			indexProductBtnLi.removeClass('li_001 li_002 li_003');
			switch(i){
				case 0:
				  indexProductBtnLi.eq(1).addClass('li_001');
				  indexProductBtnLi.eq(2).addClass('li_002');
				  break;
				case 1:
				  indexProductBtnLi.eq(2).addClass('li_001');
				  indexProductBtnLi.eq(0).addClass('li_002');
				  break;
				case 2:
				  indexProductBtnLi.eq(0).addClass('li_001');
				  indexProductBtnLi.eq(1).addClass('li_002');
				  break;
				}
			$(this).addClass('li_003');
			$('.indexProduct').find('.box').removeClass('on');
			$('.indexProduct').find('.box').eq(i).addClass('on');
			})
		})
	$('.indexProduct').find('.back').click(function(){
		$('.indexProductDiv').removeClass('on');
		indexProductBtn.removeClass('on2');
		indexProductBtn.addClass('on');
		$('.indexProduct').removeClass('on');
		$('.indexProduct').find('.box').removeClass('on');
		})
		
	//--首页地图(复杂特效)
	$('.indexMap').find('.close').click(function(){
		$('.indexMap').find('.mapA').fadeIn(300);
		$('.indexMap').find('.mapLayer').fadeOut(300);
		})
	$('.indexMap').find('.mapA').click(function(){
		$(this).hide();
		$('.indexMap').find('.mapLayer').fadeIn(300);
		})
	//--顶部下拉菜单
	$('.sNav').find('li').each(function(i){
		$(this).width($('.nav').find('li').eq(i).width());
		})
	$('.sNavA').hover(
	  function(){
		  $('.sNav').addClass('on');
		  },
	  function(){
		  $('.sNav').removeClass('on');
		  }
	)
	$('.sNav').hover(
	  function(){
		  $(this).addClass('on');
		  },
	  function(){
		  $(this).removeClass('on');
		  }
	)
	//--首页整屏切换（复杂特效）
	//--向下滑动箭头
	//--首页公司新闻（复杂特效）
	//--首页园区网络（复杂特效）
	//--底部相关企业
	$(".footer").slide({mainCell:".list3 ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:7});
	//alert($(window).height());
	//左侧导航栏切换

    $('.left').each(function(){
    var _this=$(this);
    _this.find('.part').each(function(){
      var _thisLi=$(this);
      _thisLi.find('.bg').click(function(){
        if(_thisLi.hasClass('on')){
          _thisLi.removeClass('on');
          }else{
            _this.find('.part').removeClass('on');
            _thisLi.addClass('on');
            }
        })
      })
    })

    //冰雪 选项卡切换
    //--选项卡
	$('.iceDiv').find('.iceContent:first').show();
	$('.iceTab').each(function(i){
		var _this=$(this);
		var tabContent=$('.iceDiv').eq(i).find(".iceContent");
		$(this).find('li').each(function(ii){
			$(this).click(
			function(){
				_this.find('li').removeClass('on');
				$(this).addClass('on');
				tabContent.hide();
				tabContent.eq(ii).show();
				}	
				)
			})
		})
	//--




	})
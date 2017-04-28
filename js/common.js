var baseUserInfo = [
		{
			userName:"14718090455",
			passWord:"123456"
		},
		{
			userName:"15728244221",
			passName:"123456"
		}
	],

	baseGoodsInfo = [///基础货单信息，goodsId：货单id；goodsName：货单名；createTime：货单创建日期
		{
			goodsId:1,
			goodsName:"测试货单1",
			createTime:"2017-04-28"
		},
		{
			goodsId:2,
			goodsName:"测试货单2",
			createTime:"2017-04-28"
		},
		{
			goodsId:3,
			goodsName:"测试货单3",
			createTime:"2017-04-28"
		}
	]
localStorage.baseUserInfo = JSON.stringify(baseUserInfo);
localStorage.baseGoodsInfo = JSON.stringify(baseGoodsInfo);

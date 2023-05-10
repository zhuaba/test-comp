const address = [
  {
    addressCode: '110000',
    addressName: '北京市',
    children: [{ addressCode: '110100', addressName: '北京市', children: null }]
  },
  {
    addressCode: '120000',
    addressName: '天津市',
    children: [{ addressCode: '120100', addressName: '天津市', children: null }]
  },
  {
    addressCode: '130000',
    addressName: '河北省',
    children: [
      { addressCode: '130100', addressName: '石家庄市', children: null },
      { addressCode: '130200', addressName: '唐山市', children: null },
      { addressCode: '130300', addressName: '秦皇岛市', children: null },
      { addressCode: '130400', addressName: '邯郸市', children: null },
      { addressCode: '130500', addressName: '邢台市', children: null },
      { addressCode: '130600', addressName: '保定市', children: null },
      { addressCode: '130700', addressName: '张家口市', children: null },
      { addressCode: '130800', addressName: '承德市', children: null },
      { addressCode: '130900', addressName: '沧州市', children: null },
      { addressCode: '131000', addressName: '廊坊市', children: null },
      { addressCode: '131100', addressName: '衡水市', children: null }
    ]
  },
  {
    addressCode: '140000',
    addressName: '山西省',
    children: [
      { addressCode: '140100', addressName: '太原市', children: null },
      { addressCode: '140200', addressName: '大同市', children: null },
      { addressCode: '140300', addressName: '阳泉市', children: null },
      { addressCode: '140400', addressName: '长治市', children: null },
      { addressCode: '140500', addressName: '晋城市', children: null },
      { addressCode: '140600', addressName: '朔州市', children: null },
      { addressCode: '140700', addressName: '晋中市', children: null },
      { addressCode: '140800', addressName: '运城市', children: null },
      { addressCode: '140900', addressName: '忻州市', children: null },
      { addressCode: '141000', addressName: '临汾市', children: null },
      { addressCode: '141100', addressName: '吕梁市', children: null }
    ]
  },
  {
    addressCode: '150000',
    addressName: '内蒙古自治区',
    children: [
      { addressCode: '150100', addressName: '呼和浩特市', children: null },
      { addressCode: '150200', addressName: '包头市', children: null },
      { addressCode: '150300', addressName: '乌海市', children: null },
      { addressCode: '150400', addressName: '赤峰市', children: null },
      { addressCode: '150500', addressName: '通辽市', children: null },
      { addressCode: '150600', addressName: '鄂尔多斯市', children: null },
      { addressCode: '150700', addressName: '呼伦贝尔市', children: null },
      { addressCode: '150800', addressName: '巴彦淖尔市', children: null },
      { addressCode: '150900', addressName: '乌兰察布市', children: null },
      { addressCode: '152200', addressName: '兴安盟', children: null },
      { addressCode: '152500', addressName: '锡林郭勒盟', children: null },
      { addressCode: '152900', addressName: '阿拉善盟', children: null }
    ]
  },
  {
    addressCode: '210000',
    addressName: '辽宁省',
    children: [
      { addressCode: '210100', addressName: '沈阳市', children: null },
      { addressCode: '210200', addressName: '大连市', children: null },
      { addressCode: '210300', addressName: '鞍山市', children: null },
      { addressCode: '210400', addressName: '抚顺市', children: null },
      { addressCode: '210500', addressName: '本溪市', children: null },
      { addressCode: '210600', addressName: '丹东市', children: null },
      { addressCode: '210700', addressName: '锦州市', children: null },
      { addressCode: '210800', addressName: '营口市', children: null },
      { addressCode: '210900', addressName: '阜新市', children: null },
      { addressCode: '211000', addressName: '辽阳市', children: null },
      { addressCode: '211100', addressName: '盘锦市', children: null },
      { addressCode: '211200', addressName: '铁岭市', children: null },
      { addressCode: '211300', addressName: '朝阳市', children: null },
      { addressCode: '211400', addressName: '葫芦岛市', children: null }
    ]
  },
  {
    addressCode: '220000',
    addressName: '吉林省',
    children: [
      { addressCode: '220100', addressName: '长春市', children: null },
      { addressCode: '220200', addressName: '吉林市', children: null },
      { addressCode: '220300', addressName: '四平市', children: null },
      { addressCode: '220400', addressName: '辽源市', children: null },
      { addressCode: '220500', addressName: '通化市', children: null },
      { addressCode: '220600', addressName: '白山市', children: null },
      { addressCode: '220700', addressName: '松原市', children: null },
      { addressCode: '220800', addressName: '白城市', children: null },
      { addressCode: '222400', addressName: '延边朝鲜族自治州', children: null }
    ]
  },
  {
    addressCode: '230000',
    addressName: '黑龙江省',
    children: [
      { addressCode: '230100', addressName: '哈尔滨市', children: null },
      { addressCode: '230200', addressName: '齐齐哈尔市', children: null },
      { addressCode: '230300', addressName: '鸡西市', children: null },
      { addressCode: '230400', addressName: '鹤岗市', children: null },
      { addressCode: '230500', addressName: '双鸭山市', children: null },
      { addressCode: '230600', addressName: '大庆市', children: null },
      { addressCode: '230700', addressName: '伊春市', children: null },
      { addressCode: '230800', addressName: '佳木斯市', children: null },
      { addressCode: '230900', addressName: '七台河市', children: null },
      { addressCode: '231000', addressName: '牡丹江市', children: null },
      { addressCode: '231100', addressName: '黑河市', children: null },
      { addressCode: '231200', addressName: '绥化市', children: null },
      { addressCode: '232700', addressName: '大兴安岭地区', children: null }
    ]
  },
  {
    addressCode: '310000',
    addressName: '上海市',
    children: [{ addressCode: '310100', addressName: '上海市', children: null }]
  },
  {
    addressCode: '320000',
    addressName: '江苏省',
    children: [
      { addressCode: '320100', addressName: '南京市', children: null },
      { addressCode: '320200', addressName: '无锡市', children: null },
      { addressCode: '320300', addressName: '徐州市', children: null },
      { addressCode: '320400', addressName: '常州市', children: null },
      { addressCode: '320500', addressName: '苏州市', children: null },
      { addressCode: '320600', addressName: '南通市', children: null },
      { addressCode: '320700', addressName: '连云港市', children: null },
      { addressCode: '320800', addressName: '淮安市', children: null },
      { addressCode: '320900', addressName: '盐城市', children: null },
      { addressCode: '321000', addressName: '扬州市', children: null },
      { addressCode: '321100', addressName: '镇江市', children: null },
      { addressCode: '321200', addressName: '泰州市', children: null },
      { addressCode: '321300', addressName: '宿迁市', children: null }
    ]
  },
  {
    addressCode: '330000',
    addressName: '浙江省',
    children: [
      { addressCode: '330100', addressName: '杭州市', children: null },
      { addressCode: '330200', addressName: '宁波市', children: null },
      { addressCode: '330300', addressName: '温州市', children: null },
      { addressCode: '330400', addressName: '嘉兴市', children: null },
      { addressCode: '330500', addressName: '湖州市', children: null },
      { addressCode: '330600', addressName: '绍兴市', children: null },
      { addressCode: '330700', addressName: '金华市', children: null },
      { addressCode: '330800', addressName: '衢州市', children: null },
      { addressCode: '330900', addressName: '舟山市', children: null },
      { addressCode: '331000', addressName: '台州市', children: null },
      { addressCode: '331100', addressName: '丽水市', children: null }
    ]
  },
  {
    addressCode: '340000',
    addressName: '安徽省',
    children: [
      { addressCode: '340100', addressName: '合肥市', children: null },
      { addressCode: '340200', addressName: '芜湖市', children: null },
      { addressCode: '340300', addressName: '蚌埠市', children: null },
      { addressCode: '340400', addressName: '淮南市', children: null },
      { addressCode: '340500', addressName: '马鞍山市', children: null },
      { addressCode: '340600', addressName: '淮北市', children: null },
      { addressCode: '340700', addressName: '铜陵市', children: null },
      { addressCode: '340800', addressName: '安庆市', children: null },
      { addressCode: '341000', addressName: '黄山市', children: null },
      { addressCode: '341100', addressName: '滁州市', children: null },
      { addressCode: '341200', addressName: '阜阳市', children: null },
      { addressCode: '341300', addressName: '宿州市', children: null },
      { addressCode: '341500', addressName: '六安市', children: null },
      { addressCode: '341600', addressName: '亳州市', children: null },
      { addressCode: '341700', addressName: '池州市', children: null },
      { addressCode: '341800', addressName: '宣城市', children: null }
    ]
  },
  {
    addressCode: '350000',
    addressName: '福建省',
    children: [
      { addressCode: '350100', addressName: '福州市', children: null },
      { addressCode: '350200', addressName: '厦门市', children: null },
      { addressCode: '350300', addressName: '莆田市', children: null },
      { addressCode: '350400', addressName: '三明市', children: null },
      { addressCode: '350500', addressName: '泉州市', children: null },
      { addressCode: '350600', addressName: '漳州市', children: null },
      { addressCode: '350700', addressName: '南平市', children: null },
      { addressCode: '350800', addressName: '龙岩市', children: null },
      { addressCode: '350900', addressName: '宁德市', children: null }
    ]
  },
  {
    addressCode: '360000',
    addressName: '江西省',
    children: [
      { addressCode: '360100', addressName: '南昌市', children: null },
      { addressCode: '360200', addressName: '景德镇市', children: null },
      { addressCode: '360300', addressName: '萍乡市', children: null },
      { addressCode: '360400', addressName: '九江市', children: null },
      { addressCode: '360500', addressName: '新余市', children: null },
      { addressCode: '360600', addressName: '鹰潭市', children: null },
      { addressCode: '360700', addressName: '赣州市', children: null },
      { addressCode: '360800', addressName: '吉安市', children: null },
      { addressCode: '360900', addressName: '宜春市', children: null },
      { addressCode: '361000', addressName: '抚州市', children: null },
      { addressCode: '361100', addressName: '上饶市', children: null }
    ]
  },
  {
    addressCode: '370000',
    addressName: '山东省',
    children: [
      { addressCode: '370100', addressName: '济南市', children: null },
      { addressCode: '370200', addressName: '青岛市', children: null },
      { addressCode: '370300', addressName: '淄博市', children: null },
      { addressCode: '370400', addressName: '枣庄市', children: null },
      { addressCode: '370500', addressName: '东营市', children: null },
      { addressCode: '370600', addressName: '烟台市', children: null },
      { addressCode: '370700', addressName: '潍坊市', children: null },
      { addressCode: '370800', addressName: '济宁市', children: null },
      { addressCode: '370900', addressName: '泰安市', children: null },
      { addressCode: '371000', addressName: '威海市', children: null },
      { addressCode: '371100', addressName: '日照市', children: null },
      { addressCode: '371300', addressName: '临沂市', children: null },
      { addressCode: '371400', addressName: '德州市', children: null },
      { addressCode: '371500', addressName: '聊城市', children: null },
      { addressCode: '371600', addressName: '滨州市', children: null },
      { addressCode: '371700', addressName: '菏泽市', children: null }
    ]
  },
  {
    addressCode: '410000',
    addressName: '河南省',
    children: [
      { addressCode: '410100', addressName: '郑州市', children: null },
      { addressCode: '410200', addressName: '开封市', children: null },
      { addressCode: '410300', addressName: '洛阳市', children: null },
      { addressCode: '410400', addressName: '平顶山市', children: null },
      { addressCode: '410500', addressName: '安阳市', children: null },
      { addressCode: '410600', addressName: '鹤壁市', children: null },
      { addressCode: '410700', addressName: '新乡市', children: null },
      { addressCode: '410800', addressName: '焦作市', children: null },
      { addressCode: '410900', addressName: '濮阳市', children: null },
      { addressCode: '411000', addressName: '许昌市', children: null },
      { addressCode: '411100', addressName: '漯河市', children: null },
      { addressCode: '411200', addressName: '三门峡市', children: null },
      { addressCode: '411300', addressName: '南阳市', children: null },
      { addressCode: '411400', addressName: '商丘市', children: null },
      { addressCode: '411500', addressName: '信阳市', children: null },
      { addressCode: '411600', addressName: '周口市', children: null },
      { addressCode: '411700', addressName: '驻马店市', children: null },
      { addressCode: '419001', addressName: '济源市', children: null }
    ]
  },
  {
    addressCode: '420000',
    addressName: '湖北省',
    children: [
      { addressCode: '420100', addressName: '武汉市', children: null },
      { addressCode: '420200', addressName: '黄石市', children: null },
      { addressCode: '420300', addressName: '十堰市', children: null },
      { addressCode: '420500', addressName: '宜昌市', children: null },
      { addressCode: '420600', addressName: '襄阳市', children: null },
      { addressCode: '420700', addressName: '鄂州市', children: null },
      { addressCode: '420800', addressName: '荆门市', children: null },
      { addressCode: '420900', addressName: '孝感市', children: null },
      { addressCode: '421000', addressName: '荆州市', children: null },
      { addressCode: '421100', addressName: '黄冈市', children: null },
      { addressCode: '421200', addressName: '咸宁市', children: null },
      { addressCode: '421300', addressName: '随州市', children: null },
      { addressCode: '422800', addressName: '恩施土家族苗族自治州', children: null },
      { addressCode: '429004', addressName: '仙桃市', children: null },
      { addressCode: '429005', addressName: '潜江市', children: null },
      { addressCode: '429006', addressName: '天门市', children: null },
      { addressCode: '429021', addressName: '神农架林区', children: null }
    ]
  },
  {
    addressCode: '430000',
    addressName: '湖南省',
    children: [
      { addressCode: '430100', addressName: '长沙市', children: null },
      { addressCode: '430200', addressName: '株洲市', children: null },
      { addressCode: '430300', addressName: '湘潭市', children: null },
      { addressCode: '430400', addressName: '衡阳市', children: null },
      { addressCode: '430500', addressName: '邵阳市', children: null },
      { addressCode: '430600', addressName: '岳阳市', children: null },
      { addressCode: '430700', addressName: '常德市', children: null },
      { addressCode: '430800', addressName: '张家界市', children: null },
      { addressCode: '430900', addressName: '益阳市', children: null },
      { addressCode: '431000', addressName: '郴州市', children: null },
      { addressCode: '431100', addressName: '永州市', children: null },
      { addressCode: '431200', addressName: '怀化市', children: null },
      { addressCode: '431300', addressName: '娄底市', children: null },
      { addressCode: '433100', addressName: '湘西土家族苗族自治州', children: null }
    ]
  },
  {
    addressCode: '440000',
    addressName: '广东省',
    children: [
      { addressCode: '440100', addressName: '广州市', children: null },
      { addressCode: '440200', addressName: '韶关市', children: null },
      { addressCode: '440300', addressName: '深圳市', children: null },
      { addressCode: '440400', addressName: '珠海市', children: null },
      { addressCode: '440500', addressName: '汕头市', children: null },
      { addressCode: '440600', addressName: '佛山市', children: null },
      { addressCode: '440700', addressName: '江门市', children: null },
      { addressCode: '440800', addressName: '湛江市', children: null },
      { addressCode: '440900', addressName: '茂名市', children: null },
      { addressCode: '441200', addressName: '肇庆市', children: null },
      { addressCode: '441300', addressName: '惠州市', children: null },
      { addressCode: '441400', addressName: '梅州市', children: null },
      { addressCode: '441500', addressName: '汕尾市', children: null },
      { addressCode: '441600', addressName: '河源市', children: null },
      { addressCode: '441700', addressName: '阳江市', children: null },
      { addressCode: '441800', addressName: '清远市', children: null },
      { addressCode: '441900', addressName: '东莞市', children: null },
      { addressCode: '442000', addressName: '中山市', children: null },
      { addressCode: '445100', addressName: '潮州市', children: null },
      { addressCode: '445200', addressName: '揭阳市', children: null },
      { addressCode: '445300', addressName: '云浮市', children: null }
    ]
  },
  {
    addressCode: '450000',
    addressName: '广西壮族自治区',
    children: [
      { addressCode: '450100', addressName: '南宁市', children: null },
      { addressCode: '450200', addressName: '柳州市', children: null },
      { addressCode: '450300', addressName: '桂林市', children: null },
      { addressCode: '450400', addressName: '梧州市', children: null },
      { addressCode: '450500', addressName: '北海市', children: null },
      { addressCode: '450600', addressName: '防城港市', children: null },
      { addressCode: '450700', addressName: '钦州市', children: null },
      { addressCode: '450800', addressName: '贵港市', children: null },
      { addressCode: '450900', addressName: '玉林市', children: null },
      { addressCode: '451000', addressName: '百色市', children: null },
      { addressCode: '451100', addressName: '贺州市', children: null },
      { addressCode: '451200', addressName: '河池市', children: null },
      { addressCode: '451300', addressName: '来宾市', children: null },
      { addressCode: '451400', addressName: '崇左市', children: null }
    ]
  },
  {
    addressCode: '460000',
    addressName: '海南省',
    children: [
      { addressCode: '460100', addressName: '海口市', children: null },
      { addressCode: '460200', addressName: '三亚市', children: null },
      { addressCode: '460300', addressName: '三沙市', children: null },
      { addressCode: '460400', addressName: '儋州市', children: null },
      { addressCode: '469001', addressName: '五指山市', children: null },
      { addressCode: '469002', addressName: '琼海市', children: null },
      { addressCode: '469005', addressName: '文昌市', children: null },
      { addressCode: '469006', addressName: '万宁市', children: null },
      { addressCode: '469007', addressName: '东方市', children: null },
      { addressCode: '469021', addressName: '定安县', children: null },
      { addressCode: '469022', addressName: '屯昌县', children: null },
      { addressCode: '469023', addressName: '澄迈县', children: null },
      { addressCode: '469024', addressName: '临高县', children: null },
      { addressCode: '469025', addressName: '白沙黎族自治县', children: null },
      { addressCode: '469026', addressName: '昌江黎族自治县', children: null },
      { addressCode: '469027', addressName: '乐东黎族自治县', children: null },
      { addressCode: '469028', addressName: '陵水黎族自治县', children: null },
      { addressCode: '469029', addressName: '保亭黎族苗族自治县', children: null },
      { addressCode: '469030', addressName: '琼中黎族苗族自治县', children: null }
    ]
  },
  {
    addressCode: '500000',
    addressName: '重庆市',
    children: [{ addressCode: '500100', addressName: '重庆市', children: null }]
  },
  {
    addressCode: '510000',
    addressName: '四川省',
    children: [
      { addressCode: '510100', addressName: '成都市', children: null },
      { addressCode: '510300', addressName: '自贡市', children: null },
      { addressCode: '510400', addressName: '攀枝花市', children: null },
      { addressCode: '510500', addressName: '泸州市', children: null },
      { addressCode: '510600', addressName: '德阳市', children: null },
      { addressCode: '510700', addressName: '绵阳市', children: null },
      { addressCode: '510800', addressName: '广元市', children: null },
      { addressCode: '510900', addressName: '遂宁市', children: null },
      { addressCode: '511000', addressName: '内江市', children: null },
      { addressCode: '511100', addressName: '乐山市', children: null },
      { addressCode: '511300', addressName: '南充市', children: null },
      { addressCode: '511400', addressName: '眉山市', children: null },
      { addressCode: '511500', addressName: '宜宾市', children: null },
      { addressCode: '511600', addressName: '广安市', children: null },
      { addressCode: '511700', addressName: '达州市', children: null },
      { addressCode: '511800', addressName: '雅安市', children: null },
      { addressCode: '511900', addressName: '巴中市', children: null },
      { addressCode: '512000', addressName: '资阳市', children: null },
      { addressCode: '513200', addressName: '阿坝藏族羌族自治州', children: null },
      { addressCode: '513300', addressName: '甘孜藏族自治州', children: null },
      { addressCode: '513400', addressName: '凉山彝族自治州', children: null }
    ]
  },
  {
    addressCode: '520000',
    addressName: '贵州省',
    children: [
      { addressCode: '520100', addressName: '贵阳市', children: null },
      { addressCode: '520200', addressName: '六盘水市', children: null },
      { addressCode: '520300', addressName: '遵义市', children: null },
      { addressCode: '520400', addressName: '安顺市', children: null },
      { addressCode: '520500', addressName: '毕节市', children: null },
      { addressCode: '520600', addressName: '铜仁市', children: null },
      { addressCode: '522300', addressName: '黔西南布依族苗族自治州', children: null },
      { addressCode: '522600', addressName: '黔东南苗族侗族自治州', children: null },
      { addressCode: '522700', addressName: '黔南布依族苗族自治州', children: null }
    ]
  },
  {
    addressCode: '530000',
    addressName: '云南省',
    children: [
      { addressCode: '530100', addressName: '昆明市', children: null },
      { addressCode: '530300', addressName: '曲靖市', children: null },
      { addressCode: '530400', addressName: '玉溪市', children: null },
      { addressCode: '530500', addressName: '保山市', children: null },
      { addressCode: '530600', addressName: '昭通市', children: null },
      { addressCode: '530700', addressName: '丽江市', children: null },
      { addressCode: '530800', addressName: '普洱市', children: null },
      { addressCode: '530900', addressName: '临沧市', children: null },
      { addressCode: '532300', addressName: '楚雄彝族自治州', children: null },
      { addressCode: '532500', addressName: '红河哈尼族彝族自治州', children: null },
      { addressCode: '532600', addressName: '文山壮族苗族自治州', children: null },
      { addressCode: '532800', addressName: '西双版纳傣族自治州', children: null },
      { addressCode: '532900', addressName: '大理白族自治州', children: null },
      { addressCode: '533100', addressName: '德宏傣族景颇族自治州', children: null },
      { addressCode: '533300', addressName: '怒江傈僳族自治州', children: null },
      { addressCode: '533400', addressName: '迪庆藏族自治州', children: null }
    ]
  },
  {
    addressCode: '540000',
    addressName: '西藏自治区',
    children: [
      { addressCode: '540100', addressName: '拉萨市', children: null },
      { addressCode: '540200', addressName: '日喀则市', children: null },
      { addressCode: '540300', addressName: '昌都市', children: null },
      { addressCode: '540400', addressName: '林芝市', children: null },
      { addressCode: '540500', addressName: '山南市', children: null },
      { addressCode: '540600', addressName: '那曲市', children: null },
      { addressCode: '542500', addressName: '阿里地区', children: null }
    ]
  },
  {
    addressCode: '610000',
    addressName: '陕西省',
    children: [
      { addressCode: '610100', addressName: '西安市', children: null },
      { addressCode: '610200', addressName: '铜川市', children: null },
      { addressCode: '610300', addressName: '宝鸡市', children: null },
      { addressCode: '610400', addressName: '咸阳市', children: null },
      { addressCode: '610500', addressName: '渭南市', children: null },
      { addressCode: '610600', addressName: '延安市', children: null },
      { addressCode: '610700', addressName: '汉中市', children: null },
      { addressCode: '610800', addressName: '榆林市', children: null },
      { addressCode: '610900', addressName: '安康市', children: null },
      { addressCode: '611000', addressName: '商洛市', children: null }
    ]
  },
  {
    addressCode: '620000',
    addressName: '甘肃省',
    children: [
      { addressCode: '620100', addressName: '兰州市', children: null },
      { addressCode: '620200', addressName: '嘉峪关市', children: null },
      { addressCode: '620300', addressName: '金昌市', children: null },
      { addressCode: '620400', addressName: '白银市', children: null },
      { addressCode: '620500', addressName: '天水市', children: null },
      { addressCode: '620600', addressName: '武威市', children: null },
      { addressCode: '620700', addressName: '张掖市', children: null },
      { addressCode: '620800', addressName: '平凉市', children: null },
      { addressCode: '620900', addressName: '酒泉市', children: null },
      { addressCode: '621000', addressName: '庆阳市', children: null },
      { addressCode: '621100', addressName: '定西市', children: null },
      { addressCode: '621200', addressName: '陇南市', children: null },
      { addressCode: '622900', addressName: '临夏回族自治州', children: null },
      { addressCode: '623000', addressName: '甘南藏族自治州', children: null }
    ]
  },
  {
    addressCode: '630000',
    addressName: '青海省',
    children: [
      { addressCode: '630100', addressName: '西宁市', children: null },
      { addressCode: '630200', addressName: '海东市', children: null },
      { addressCode: '632200', addressName: '海北藏族自治州', children: null },
      { addressCode: '632300', addressName: '黄南藏族自治州', children: null },
      { addressCode: '632500', addressName: '海南藏族自治州', children: null },
      { addressCode: '632600', addressName: '果洛藏族自治州', children: null },
      { addressCode: '632700', addressName: '玉树藏族自治州', children: null },
      { addressCode: '632800', addressName: '海西蒙古族藏族自治州', children: null }
    ]
  },
  {
    addressCode: '640000',
    addressName: '宁夏回族自治区',
    children: [
      { addressCode: '640100', addressName: '银川市', children: null },
      { addressCode: '640200', addressName: '石嘴山市', children: null },
      { addressCode: '640300', addressName: '吴忠市', children: null },
      { addressCode: '640400', addressName: '固原市', children: null },
      { addressCode: '640500', addressName: '中卫市', children: null }
    ]
  },
  {
    addressCode: '650000',
    addressName: '新疆维吾尔自治区',
    children: [
      { addressCode: '650100', addressName: '乌鲁木齐市', children: null },
      { addressCode: '650200', addressName: '克拉玛依市', children: null },
      { addressCode: '650400', addressName: '吐鲁番市', children: null },
      { addressCode: '650500', addressName: '哈密市', children: null },
      { addressCode: '652300', addressName: '昌吉回族自治州', children: null },
      { addressCode: '652700', addressName: '博尔塔拉蒙古自治州', children: null },
      { addressCode: '652800', addressName: '巴音郭楞蒙古自治州', children: null },
      { addressCode: '652900', addressName: '阿克苏地区', children: null },
      { addressCode: '653000', addressName: '克孜勒苏柯尔克孜自治州', children: null },
      { addressCode: '653100', addressName: '喀什地区', children: null },
      { addressCode: '653200', addressName: '和田地区', children: null },
      { addressCode: '654000', addressName: '伊犁哈萨克自治州', children: null },
      { addressCode: '654200', addressName: '塔城地区', children: null },
      { addressCode: '654300', addressName: '阿勒泰地区', children: null },
      { addressCode: '659001', addressName: '石河子市', children: null },
      { addressCode: '659002', addressName: '阿拉尔市', children: null },
      { addressCode: '659003', addressName: '图木舒克市', children: null },
      { addressCode: '659004', addressName: '五家渠市', children: null },
      { addressCode: '659005', addressName: '北屯市', children: null },
      { addressCode: '659006', addressName: '铁门关市', children: null },
      { addressCode: '659007', addressName: '双河市', children: null },
      { addressCode: '659008', addressName: '可克达拉市', children: null },
      { addressCode: '659009', addressName: '昆玉市', children: null }
    ]
  },
  {
    addressCode: '710000',
    addressName: '台湾省',
    children: [
      { addressCode: '710100', addressName: '台北市', children: null },
      { addressCode: '710200', addressName: '高雄市', children: null },
      { addressCode: '710300', addressName: '台南市', children: null },
      { addressCode: '710400', addressName: '台中市', children: null },
      { addressCode: '710600', addressName: '南投县', children: null },
      { addressCode: '710700', addressName: '基隆市', children: null },
      { addressCode: '710800', addressName: '新竹市', children: null },
      { addressCode: '710900', addressName: '嘉义市', children: null },
      { addressCode: '711100', addressName: '新北市', children: null },
      { addressCode: '711200', addressName: '宜兰县', children: null },
      { addressCode: '711300', addressName: '新竹县', children: null },
      { addressCode: '711400', addressName: '桃园市', children: null },
      { addressCode: '711500', addressName: '苗栗县', children: null },
      { addressCode: '711700', addressName: '彰化县', children: null },
      { addressCode: '711900', addressName: '嘉义县', children: null },
      { addressCode: '712100', addressName: '云林县', children: null },
      { addressCode: '712400', addressName: '屏东县', children: null },
      { addressCode: '712500', addressName: '台东县', children: null },
      { addressCode: '712600', addressName: '花莲县', children: null },
      { addressCode: '712700', addressName: '澎湖县', children: null }
    ]
  },
  {
    addressCode: '810000',
    addressName: '香港特别行政区',
    children: [{ addressCode: '810100', addressName: '香港特别行政区', children: null }]
  },
  {
    addressCode: '820000',
    addressName: '澳门特别行政区',
    children: [{ addressCode: '820100', addressName: '澳门特别行政区', children: null }]
  }
]

export default address

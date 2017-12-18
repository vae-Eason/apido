package ee.java2.handle;

import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.Maps;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.WebResource;
import org.junit.Test;

import javax.ws.rs.core.MediaType;
import java.util.Map;

//@RunWith(SpringRunner.class)
//@SpringBootTest
public class SfDatainteractionApplicationTests {

//	private static Client client = Client.create();

	@Test
	public void contextLoads(){

		int[] arrays= new int[]{634153,638755,641340,643696,643964,647937,649292,650595,651251,651278,652204,652281,653137,654783,657165,657445,658221,658329,658398,658459,659403,660753,661181,662795,663097,664332,664776,665994,668327,668601,669066,669496,669607,670603,670876,671338,673128,673960,674667,674685,677171,677553,678153,678266,678336,679610,679627,679672,679735,681198,681339,681865,682206,682217,682271,683203,685563,685982,687955,688173,688315,688842,689026,689608,689610,689632,689653,689667,689673,689689,689718,689728,689733,690390,691206,691257,692251,693018,693117,693158,693196,694813,695443,697272,697975,698103,698303,698306,698452,699606,699626,699698,699721,699722,699725,699737,700360,700830,705638,707272,707677,707761,708012,708175,708179,708206,708253,708400,709234,709360,709606,709617,709622,709626,709651,709665,709702,709705,710823,710902,710928,711393,711540,711895,712700,712757,712772,712989,713293,713353,713491,713685,713877,715378,715918,716392,716978,718117,718121,718129,718201,719069,719616,719631,719639,719671,719676,719715,719720,719723,719736,719875,720157,721268,722394,723568,723685,723980,725078,725147,725218,726210,726323,726706,726994,728185,728195,728203,728218,728228,728268,728310,728318,728896,729369,729625,729637,729680,729682,729692,729717,729722,729730,729731,729732,729738,729739,730527,731907,732760,735272,738095,738219,738261,738266,738272,738282,738560,738849,739650,739670,739679,739708,739717,739727,740386,740878,741157,741480,743228,745570,745577,748096,748158,748537,749617,749638,749675,749681,749697,749750,749878,751618,755586,755805,755900,756200,756209,758162,758217,758298,759399,759494,759609,759623,759690,760183,760702,763229,765301,766662,767061,767222,767658,768183,768263,769008,769635,770784,770880,772666,774455,774980,775198,775385,775540,775686,776168,776389,776501,777772,778072,778122,778178,778261,778911,779553,779621,779707,779876,779935,782280,782340,782380,783071,786007,786087,787300,788111,788150,789693,789695,789701,789703,790808,791222,792933,796979,797667,798169,798223,798226,799618,799658,799758,799811,805234,805366,805618,806075,807879,808256,809782,811557,812366,814987,815270,818150,818309,819681,822781,823198,825297,827770,829102,833166,833595,835508,835525,837097,838055,839688,840123,840127,841463,846996,847121,847234,849996,852677,855506,856909,858200,860460,863886,865866,867245,867800,875957,878556,880066,883389,885007,886020,886788,895003,895228,899719,911717,918866,930019,936618,943669,950075,950100,956944,990999,1009277,1041122,1059300,6611159,6615131,6616159,6630450,6630631,6631998,6634291,6640476,6650526,6660205,6660600};

//		List<Integer> userLists = Lists.newArrayList();
//		userLists.addAll(arrays);
		Client client = Client.create();
		for(int i = (arrays.length/2 - 1);i<arrays.length;i++){
			String url = "http://im.xtion.net:8090/api/im/groupManager/createUser";
			Map<String,Object> params  = Maps.newHashMap();
			params.put("gatewayUserId",arrays[i]);

			WebResource webResource = client.resource(url);
			String response = webResource
					.header("Content-Type", "application/json;charset=UTF-8")
					.header("appId", "sfa")
					.header("tenantId", "hengda")
					.header("operatorId", "642693")
					.type(MediaType.APPLICATION_JSON)
					.post(String.class, params);
			JSONObject result = JSONObject.parseObject(response);


			if((Integer)result.get("status") != 1){
				System.out.println((i+1)+":"+params.toString());
				System.out.println(result.toString());
				System.out.println(arrays[i]+"失败");
			}

			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {

			}
		}
	}

}

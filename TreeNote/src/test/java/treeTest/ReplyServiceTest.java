package treeTest;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import treenote.domain.Reply;
import treenote.service.reply.ReplyService;

@RunWith(SpringJUnit4ClassRunner.class)

//@ContextConfiguration(locations = { "classpath:config/context-*.xml" })
@ContextConfiguration	(locations = {	"classpath:config/context-common.xml",
										"classpath:config/context-aspect.xml",
										"classpath:config/context-mybatis.xml",
										"classpath:config/context-transaction.xml" })
//@ContextConfiguration(locations = { "classpath:config/context-common.xml" })
public class ReplyServiceTest {

	//==>@RunWith,@ContextConfiguration �̿� Wiring, Test �� instance DI
	@Autowired
	@Qualifier("replyServiceImpl")
	private ReplyService replyService;

	//@Test
	public void testAddReply() throws Exception {
		
		Reply reply = new Reply();
		reply.setContentNo(1000000);
		reply.setReply("안녕하세요");
		reply.setUserNo(1000000);
		
		replyService.addReply(reply);
		
		System.out.println("AddReply Result :: "+replyService.listReply(1000041).get(0));
	}
	
	
	
	//@Test
	 public void testUpdateReply() throws Exception{
		 
		 Reply reply = new Reply();
		 reply.setReplyNo(1000041);
		 reply.setReply("감사해요");
		 
		 replyService.updateReply(reply);
		 
		 System.out.println("UpadteReply Result :: "+replyService.listReply(1000041).get(0));
	 }
	 
	 //@Test
	 public void testRemoveReply() throws Exception{
			 
			 Reply reply = new Reply();
			 int replyNo = 1000041;
			 
			 replyService.removeReply(replyNo);
			 
		 }
	//@Test
	 public void testListReply() throws Exception{
			 
			 int contentNo = 1000000;
			 System.out.println("testListReply Result :: "+replyService.listReply(contentNo).get(0));
			 
			 
		 }
	@Test
		 public void testGetReplyListTotalCount() throws Exception{
			
			int contentNo = 1000000;
			int totalCount = 0;
			
			totalCount = replyService.ReplytotalCount(contentNo);
			
			System.out.println("totalCount :: "+totalCount);
		 
		 }
}
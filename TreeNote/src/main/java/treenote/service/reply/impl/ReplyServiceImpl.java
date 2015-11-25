package treenote.service.reply.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import treenote.domain.Reply;
import treenote.service.reply.ReplyDao;
import treenote.service.reply.ReplyService;;

@Service("replyServiceImpl")
public class ReplyServiceImpl implements ReplyService {

	/// Field
	@Autowired
	@Qualifier("replyDaoImpl")
	private ReplyDao replyDao;

	public void setReplyDao(ReplyDao replyDao) {
		this.replyDao = replyDao;
	}

	/// Constructor
	public ReplyServiceImpl() {
		System.out.println(this.getClass());
	}

	@Override
	public void addReply(Reply reply) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateReply(Reply reply) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeReply(int replyNo) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Reply> listReply(int contentNo) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	
}
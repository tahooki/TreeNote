package treenote.service.reply;

import java.util.List;

import treenote.domain.Reply;

public interface ReplyService {
	//추가
	public void addReply(Reply reply) throws Exception;	
	//수정
	public void updateReply(Reply reply) throws Exception;
	//삭제
	public void removeReply(int replyNo) throws Exception;
	//댓글리스트
	public List<Reply> listReply(int contentNo) throws Exception;
	//총 댓글 수 
	public int ReplytotalCount(int contentNo) throws Exception;
}
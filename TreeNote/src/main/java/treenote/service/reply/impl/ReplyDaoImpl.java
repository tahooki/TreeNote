package treenote.service.reply.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import treenote.domain.Reply;
import treenote.service.reply.ReplyDao;

@Repository("replyDaoImpl")
public class ReplyDaoImpl implements ReplyDao {

	/// Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	/// Constructor
	public ReplyDaoImpl() {
		System.out.println(this.getClass());
	}

	@Override
	public void addReply(Reply reply) throws Exception {
		// TODO Auto-generated method stub
		sqlSession.insert("ReplyMapper.addReply", reply);
	}

	@Override
	public void updateReply(Reply reply) throws Exception {
		// TODO Auto-generated method stub
		sqlSession.update("ReplyMapper.updateReply", reply);
	}

	@Override
	public void removeReply(int replyNo) throws Exception {
		// TODO Auto-generated method stub
		sqlSession.delete("ReplyMapper.deleteRelpy", replyNo);
	}

	@Override
	public List<Reply> listReply(int contentNo) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectList("ReplyMapper.getRelpyList", contentNo);
	}

	@Override
	public int ReplytotalCount(int contentNo) throws Exception {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("ReplyMapper.getTotalReply", contentNo);
	}
	
	
}
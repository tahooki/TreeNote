package treenote.service.keyword.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import treenote.domain.Keyword;
import treenote.service.content.ContentDao;
import treenote.service.keyword.KeywordDao;
import treenote.service.keyword.KeywordService;;

@Service("keywordServiceImpl")
public class KeywordServiceImpl implements KeywordService {

	/// Field
	@Autowired
	@Qualifier("keywordDaoImpl")
	private KeywordDao keywordDao;

	@Autowired
	@Qualifier("contentDaoImpl")
	private ContentDao contentDao;

	public void setKeywordDao(KeywordDao keywordDao) {
		this.keywordDao = keywordDao;
	}

	public void setContentDao(ContentDao contentDao) {
		this.contentDao = contentDao;
	}

	/// Constructor
	public KeywordServiceImpl() {
		System.out.println(this.getClass());
	}

	@Override
	public Keyword addKeyword(Keyword keyword) throws Exception {
		// TODO Auto-generated method stub
		int keywordNo = keywordDao.getKeywrodNo();
		//int keywordNo = keyword.getKeywordNo();
		keyword.setKey(keywordNo);
		keywordDao.addKeyword(keyword);
		return keywordDao.getKeyword(keywordNo);
	}

	@Override
	public int updateKeyword(Keyword keyword) throws Exception {
		// TODO Auto-generated method stub
		return keywordDao.updateKeyword(keyword);
	}

	@Override
	public void removeKeyword(Keyword keyword) throws Exception {
		// TODO Auto-generated method stub
		//키워드 자식 삭제
		//키워드 내용 삭제
		//키워드 삭제
		keywordDao.removeKeyword(keyword);
	}

	@Override
	public List<Keyword> listTimeLineKeyword(String keyword) throws Exception {
		// TODO Auto-generated method stub
		return keywordDao.listTimeLineKeyword(keyword);
	}

	@Override
	public List<Keyword> listChildKeyword(int keywordNo) throws Exception {
		// TODO Auto-generated method stub
		//String listChildNo =
		return keywordDao.listChildKeyword(keywordNo);
	}

	@Override
	public Keyword copyKeyword(Keyword keyword) throws Exception {
		// TODO Auto-generated method stub
		return keywordDao.copyKeyword(keyword);
	}

}
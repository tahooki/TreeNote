package treenote.service.keyword;

import java.util.List;

import treenote.domain.Keyword;

public interface KeywordService {
	//추가
	public Keyword addKeyword(Keyword keyword) throws Exception;	
	//수정
	public int updateKeyword(Keyword keyword) throws Exception;
	//삭제
	public void removeKeyword(Keyword keyword) throws Exception;
	//해당 키워드 리스트 불러오기
	public List<Keyword> listTimeLineKeyword(String keyword) throws Exception;
	//자식 키워드 불러오기
	public List<Keyword> listChildKeyword(int keywordNo) throws Exception;
	//복사
	public Keyword copyKeyword(Keyword keyword) throws Exception; 
}
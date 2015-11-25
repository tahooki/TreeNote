package treenote.web.tree;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import treenote.domain.Tree;
import treenote.service.tree.TreeService;

@Controller
@RequestMapping("/tree/*")
public class TreeController {

	/// Field
	@Autowired
	@Qualifier("treeServiceImpl")
	private TreeService treeService;

	public TreeController() {
		System.out.println(this.getClass());
	}

	//생성
	@RequestMapping(value = "addTree")
	public void addTree(@RequestBody Tree tree, Model model) throws Exception {
		System.out.println("/addTree");
	}
	//제목수정
	@RequestMapping(value = "updateTitle/{title}")
	public void updateTitle(@PathVariable String title, Model model) throws Exception{
		System.out.println("/updateTitle");
	}
	//삭제
	@RequestMapping(value = "removeTree/{treeNo}")
	public void removeTree(@PathVariable int treeNo, Model model) throws Exception{
		System.out.println("/removeTree");
	}
	//불러오기
	@RequestMapping(value = "listFriend/{treeNo}")
	public void getTree(@PathVariable int treeNo, Model model) throws Exception{
		System.out.println("/getTree");
	}
	//트리 리스트를 불러온다.
	@RequestMapping(value = "listTree/{userNo}")
	public void listTree(int userNo, Model model) throws Exception{
		System.out.println("/listTree");
	}
}

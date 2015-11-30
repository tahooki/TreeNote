package treenote.web.user;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fasterxml.jackson.core.JsonParser;
import com.google.gson.JsonObject;

import treenote.domain.User;
import treenote.service.user.UserService;

@Controller
@RequestMapping("/user/*")
public class UserController {

	/// Field
	@Autowired
	@Qualifier("userServiceImpl")
	private UserService userService;

	public UserController() {
		System.out.println(this.getClass());
	}

	//로그인
	@RequestMapping(value = "login")
	public void login(@RequestBody User user, Model model, HttpSession session) throws Exception {
		System.out.println("/login");
		User returnUser = userService.loginUser(user);
		
		if(user.getEmail().equals(returnUser.getEmail())&&user.getPassword().equals(returnUser.getPassword())){
			session.setAttribute("user", returnUser);
			model.addAttribute(true);
		}else{
			model.addAttribute(false);
		}
		JsonObject obj = new JsonObject();
		
		
				
	}

	//로그아웃
	@RequestMapping(value = "logout")
	public void logout(HttpSession session) throws Exception {
		System.out.println("/logout");
	}

	//가입체크
	@RequestMapping(value = "checkDuplication/{email}")
	public void checkDuplication(@PathVariable String email, Model model) throws Exception {
		System.out.println("/checkDuplication");
	}

	//유저정보가지고 오기
	@RequestMapping(value = "getUser/{userNo}")
	public void getUser(@PathVariable int userNo, Model model) throws Exception {
		System.out.println("/getUser");
	}

	//유저 가입
	@RequestMapping(value = "addUser")
	public void addUser(@RequestBody User user, Model model) throws Exception {
		System.out.println("/addUser");
	}

	//유저 정보 업데이트
	@RequestMapping(value = "updateUser")
	public void updateUser(@RequestBody User user, Model model) throws Exception {
		System.out.println("/updateUser");
	}

	//친구 목록
	@RequestMapping(value = "listFriend/{userNo}")
	public void listFriend(@PathVariable int userNo, Model model) throws Exception {
		System.out.println("/listFriend");
	}
}
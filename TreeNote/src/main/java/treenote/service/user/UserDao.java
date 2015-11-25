package treenote.service.user;

import java.util.List;

import treenote.domain.User;

public interface UserDao {

	public void addUser(User user) throws Exception ;

	public User getUser(int userNo) throws Exception ;

	public List<User> getUserList(int userNo) throws Exception ;

	public int updateUser(User user) throws Exception ;
	
	public boolean checkDuplication(String email) throws Exception;
}
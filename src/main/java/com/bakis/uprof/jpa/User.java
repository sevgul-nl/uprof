package com.bakis.uprof.jpa;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "uprof")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "name", length = 255, nullable = true)
	private String name;

	@Column(name = "address", length = 512, nullable = true)
	private String address;

	@Column(name = "email", length = 128, nullable = true)
	private String email;

	@Column(name = "phone", length = 32, nullable = true)
	private String phone;

	@Column(name = "username", length = 255, nullable = false)
	private String username;

	@Column(name = "password", length = 255, nullable = false)
	private String password;

	@Column(name = "enabled", nullable = false)
	@org.hibernate.annotations.Type(type = "org.hibernate.type.NumericBooleanType")
	private boolean enabled;

	@Column(name = "role", columnDefinition = "varchar(5) DEFAULT 'USER'")
	private String role;

	public User() {

	}

	public User(long id, String name, String address, String email, String phone, String username, String password,
			Boolean enabled, String role) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.email = email;
		this.phone = phone;
		this.username = username;
		this.password = password;
		this.enabled = enabled;
		this.role = role;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		if (email == null)
			this.email = "email@email.com";
		else
			this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getEnabled() {

		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		if (enabled == null)
			this.enabled = true;
		else
			this.enabled = enabled;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", username=" + username + ", address=" + address + ", email="
				+ email + ", phone=" + phone + ", password=" + password + "]";
	}

}

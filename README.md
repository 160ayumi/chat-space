# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, foreign_key: true|
|email|integer|null: false, foreign_key: true|


### Association
- has_many :chatgroups_users
- has_many :massages
  has_many : chatgroups, through: :chatgroups_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
|chatgroup_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :chatgroup
- belongs_to :user

## chatgroupsテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|integer|null: false, foreign_key: true|

### Association
- has_many :chatgroups_users
- has_may :messages
- has_many :users, through: :chatgroups_users

## chatgroups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|chatgroup_id|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :chatgroup


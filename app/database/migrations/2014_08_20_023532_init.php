<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Init extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function($table){
			$table->increments('id');
			$table->string('name');
			$table->string('twitch_auth');
		});
		Schema::create('events', function($table){
			$table->increments('id');
			$table->string('type');
			$table->datetime('time');
			$table->integer('streamer_id')->unsigned();
			$table->foreign('streamer_id')->references('id')->on('users');
			$table->integer('user_id')->unsigned();
			$table->foreign('user_id')->references('id')->on('users');
			$table->decimal('amount');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
		Schema::drop('events');
	}

}

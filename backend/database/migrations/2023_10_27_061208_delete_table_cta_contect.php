<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DeleteTableCtaContect extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */



    public function up()
    {
        Schema::table('home', function (Blueprint $table) {
            $table->dropForeign('home_cta_contact_id_foreign');
            $table->dropColumn('cta_contact_id');
        });
        Schema::table('service_pages', function (Blueprint $table) {
            $table->dropForeign('service_pages_cta_contact_id_foreign');
            $table->dropColumn('cta_contact_id');
        });
        Schema::table('about', function (Blueprint $table) {
            $table->dropForeign('about_cta_contact_id_foreign');
            $table->dropColumn('cta_contact_id');
        });
        Schema::table('article_pages', function (Blueprint $table) {
            $table->dropForeign('article_pages_cta_contact_id_foreign');
            $table->dropColumn('cta_contact_id');
        });
        Schema::table('career_pages', function (Blueprint $table) {
            $table->dropForeign('career_pages_cta_contact_id_foreign');
            $table->dropColumn('cta_contact_id');
        });
        Schema::dropIfExists('cta_contact');
    }



    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        Schema::create('cta_contact', function (Blueprint $table) {
            $table->id()->default(1);
            $table->string('title')->default('Transform Today, Conquer Tomorrow');
            $table->string('desc')->default('Let us help you with your digital transformation to boost productivity and fortify your daily activities and business worth.');
            $table->timestamps();
        });
        Schema::table('home', function (Blueprint $table) {
            $table->unsignedBigInteger('cta_contact_id')->default(1);
            $table->foreign('cta_contact_id')->references('id')->on('cta_contact');
        });

        Schema::table('service_pages', function (Blueprint $table) {
            $table->unsignedBigInteger('cta_contact_id')->default(1);
            $table->foreign('cta_contact_id')->references('id')->on('cta_contact');
        });

        Schema::table('about', function (Blueprint $table) {
            $table->unsignedBigInteger('cta_contact_id')->default(1);
            $table->foreign('cta_contact_id')->references('id')->on('cta_contact');
        });

        Schema::table('article_pages', function (Blueprint $table) {
            $table->unsignedBigInteger('cta_contact_id')->default(1);
            $table->foreign('cta_contact_id')->references('id')->on('cta_contact');
        });

        Schema::table('career_pages', function (Blueprint $table) {
            $table->unsignedBigInteger('cta_contact_id')->default(1);
            $table->foreign('cta_contact_id')->references('id')->on('cta_contact');
        });

    }
}

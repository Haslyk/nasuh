<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\CorporatePage;
use App\Models\Stat;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Admin::updateOrCreate(
            ['username' => 'admin'],
            [
                'password' => Hash::make('123456'),
            ]
        );


        CorporatePage::updateOrCreate(
            ['slug' => 'about'],
            [
                'title' => 'Hakkımızda',
                'content' => 'Şirketimizin köklü geçmişi ve başarı hikayesi burada yer alır.',
            ]
        );

        CorporatePage::updateOrCreate(
            ['slug' => 'vision'],
            [
                'title' => 'Vizyon & Misyon',
                'content' => 'Gelecek hedeflerimiz ve temel varlık sebebimiz olan vizyon & misyon değerlerimiz.',
            ]
        );

        CorporatePage::updateOrCreate(
            ['slug' => 'quality'],
            [
                'title' => 'Kalite Politikası',
                'content' => 'Müşteri memnuniyeti odaklı kalite standartlarımız ve yönetim politikamız.',
            ]
        );

        $stats = [
            [
                'label' => 'Yıllık Deneyim',
                'value' => '15+',
                'icon_name' => 'Settings'
            ],
            [
                'label' => 'Uzman Kadro',
                'value' => '10+',
                'icon_name' => 'Users'
            ],
            [
                'label' => 'Mutlu Müşteri',
                'value' => '500+',
                'icon_name' => 'Smile'
            ]
        ];

        foreach ($stats as $stat) {
            Stat::updateOrCreate(
                ['label' => $stat['label']],
                $stat
            );
        }
    }
}

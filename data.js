const WORD_DATA = {
    "Bilişim": [
        "YAZILIM", "ALGORİTMA", "VERİTABANI", "İNTERNET", "BİLGİSAYAR", "DONANIM", "PROGRAMLAMA", "KLAVYE", "FARE", "İŞLEMCİ",
        "BELLEK", "SUNUCU", "AĞ", "GÜVENLİK", "KODLAMA", "ARAYÜZ", "YAZICI", "EKRAN", "DEPOLAMA", "SİSTEM",
        "YAPAY", "ZEKA", "BULUT", "MOBİL", "UYGULAMA", "TARAYICI", "BİLGİ", "TEKNOLOJİ", "DİJİTAL", "VERİ",
        "BİT", "BAYT", "PİKSEL", "ÇÖZÜNÜRLÜK", "WİFİ", "RADYO", "SİNYAL", "FREKANS", "MODEM", "YÖNLENDİRİCİ",
        "DOSYA", "KLASÖR", "MASAÜSTÜ", "PENCERE", "SİMGE", "MENÜ", "ARAÇ", "ÇUBUĞU", "GÖREV", "YÖNETİCİSİ"
    ],
    "Genel Kültür": [
        "MÜZE", "KÜTÜPHANE", "TİYATRO", "SİNEMA", "KONSER", "SERGİ", "FESTİVAL", "KÜLTÜR", "SANAT", "EDEBİYAT",
        "TARİH", "COĞRAFYA", "FELSEFE", "MİTOLOJİ", "BİLİM", "TEKNOLOJİ", "SPOR", "MÜZİK", "RESİM", "HEYKEL",
        "MİMARİ", "GASTRONOMİ", "SİYASET", "EKONOMİ", "HUKUK", "EĞİTİM", "SAĞLIK", "İNSAN", "TOPLUM", "DÜNYA",
        "EVREN", "DOĞA", "HAYVAN", "BİTKİ", "ÇEVRE", "İKLİM", "HAVA", "DENİZ", "OKYANUS", "DAĞ",
        "NEHİR", "GÖL", "ADA", "KITA", "ÜLKE", "ŞEHİR", "KASABA", "KÖY", "MAHALLE", "SOKAK"
    ],
    "Mitoloji": [
        "ZEUS", "HERA", "POSEİDON", "HADES", "ATHENA", "APOLLO", "ARTEMİS", "ARES", "AFRODİT", "HEPHAESTUS",
        "HERMES", "DİONYSUS", "PERSEPHONE", "DEMETER", "HESTİA", "PAN", "EROS", "NİKE", "HECATE", "NEMESİS",
        "ODYSSEUS", "ACHİLLES", "HECTOR", "PARİS", "HELEN", "AGAMEMNON", "MENELAUS", "AJAX", "PRİAM", "ANDROMACHE",
        "HERCULES", "PERSEUS", "THESEUS", "JASON", "MEDUSA", "PEGASUS", "CHİMERA", "HYDRA", "CERBERUS", "MİNOTAUR",
        "ODİN", "THOR", "LOKI", "FREYA", "VALKYRİE", "RAGNAROK", "ANUBİS", "OSİRİS", "İSİS", "HORUS"
    ],
    "Edebiyat": [
        "ROMAN", "HİKAYE", "ŞİİR", "DENEME", "MAKALE", "ELEŞTİRİ", "GÜNCE", "ANI", "TİYATRO", "SENARYO",
        "YAZAR", "ŞAİR", "OKUR", "KİTAP", "DERGİ", "GAZETE", "YAYINEVİ", "EDEBİYAT", "METİN", "DİLBILGİSİ",
        "NOKTA", "VİRGÜL", "ÜNLEM", "SORU", "PARANTEZ", "TIRNAK", "SATIR", "MISRA", "KITA", "BÖLÜM",
        "KARAKTER", "OLAY", "MEKAN", "ZAMAN", "ANLATICI", "BAKIŞ", "AÇISI", "TEMA", "KONU", "ANA",
        "FİKİR", "BİÇİM", "ÜSLUP", "AKIM", "KLASİK", "MODERN", "POSTMODERN", "KURGU", "GERÇEKÇİ", "ROMANTİK"
    ],
    "Tarih": [
        "OSMANLI", "SELÇUKLI", "CUMHURİYET", "DEVRİM", "SAVAŞ", "BARIŞ", "ANTLAŞMA", "SULTAN", "PADİŞAH", "KRAL",
        "İMPARATOR", "SARAY", "KALE", "FETİH", "İSİYAN", "DİREİŞ", "KURULUŞ", "YÜKSELİŞ", "DURAKLAMA", "GERİLEME",
        "ÇÖKÜŞ", "YENİDEN", "DOĞUŞ", "MİLLİ", "MÜCADELE", "ATATÜRK", "ORDU", "DONANMA", "ASKER", "CEPHE",
        "LOZAN", "MUDANYA", "SAKARYA", "DUMLUPINAR", "ÇANAKKALE", "İSTANBUL", "ANKARA", "İZMİR", "BURSA", "EDİRNE",
        "KONYA", "SİVAS", "ERZURUM", "AMASYA", "SAMSUN", "AFYON", "KÜTAHYA", "ESKİŞEHİR", "KAYSERİ", "MALATYA"
    ],
    "Matematik": [
        "TOPLAMA", "ÇIKARMA", "ÇARPMA", "BÖLME", "RAKAM", "SAYI", "KÜME", "FONKSİYON", "TÜREV", "İNTEGRAL",
        "LİMİT", "DENKLEM", "EŞİTSİZLİK", "MATRİS", "VEKTÖR", "GEOMETRİ", "ÜÇGEN", "KARE", "DİKDÖRTGEN", "DAİRE",
        "ELİPS", "PİRAMİT", "SİLİNDİR", "KÜRE", "HACİM", "ALAN", "ÇEVRE", "AÇI", "KENAR", "KÖŞE",
        "DİAGONAL", "YARIÇAP", "ÇAP", "TEĞET", "NORMAL", "LOGARİTMA", "TRİGONOMETRİ", "SİNÜS", "KOSİNÜS", "TANJANT",
        "KOTANJANT", "OLASILIK", "İSTATİSTİK", "ORTALAMA", "MEDYAN", "MOD", "VARYANS", "STANDART", "SAYMA", "PERMÜTASYON"
    ],
    "Bilim": [
        "FİZİK", "KİMYA", "BİYOLOJİ", "ASTRONOMİ", "JEOLOJİ", "PSİKOLOJİ", "SOSYOLOJİ", "ANTROPOLOJİ", "ARKEOLOJİ", "TIP",
        "ECZACILIK", "MÜHENDİSLİK", "GENETİK", "HÜCRE", "ATOM", "MOLEKÜL", "ELEMENT", "BİLEŞİK", "REAKSİYON", "ENERJİ",
        "KUVVET", "HAREKET", "IŞIK", "SES", "ISI", "ELEKTRİK", "MANYETİZMA", "YERÇEKİMİ", "EVRİM", "EKOLOJİ",
        "DENEY", "ZÖZLEM", "TEORİ", "HİPOTEZ", "YASA", "LABORATUVAR", "MİKROSKOP", "TELESKOP", "MERCEK", "AYNA",
        "PRİZMA", "RADYASYON", "NÜKLEER", "KUANTUM", "GÖRELİLİK", "DNA", "RNA", "PROTEİN", "ENZİM", "HORMON"
    ],
    "Coğrafya": [
        "TÜRKİYE", "AVRUPA", "ASYA", "AFRİKA", "AMERİKA", "OKYANUSYA", "ANTARKTİKA", "AKDENİZ", "KARADENİZ", "EGE",
        "MARMARA", "DAĞ", "OVA", "PLATO", "VADİ", "ADA", "YARIMADA", "KÖRFEZ", "BOĞAZ", "NEHİR",
        "GÖL", "DENİZ", "OKYANUS", "İKLİM", "HAVA", "TOPRAK", "BİTKİ", "HAYVAN", "NÜFUS", "YERLEŞİM",
        "TARIM", "SANAYİ", "TİCARET", "ULAŞIM", "TURİZM", "MADEN", "ENERJİ", "EKONOMİ", "SİYASET", "HUKUK",
        "HARİTA", "ÖLÇEK", "KOORDİNAT", "ENLEM", "BOYLAM", "SAAT", "DİLİMİ", "MEVSİM", "YIL", "AY"
    ],
    "Müzik (90’lar)": [
        "TARKAN", "SERTAB", "ERENER", "LEVENT", "YÜKSEL", "AŞKIN", "NUR", "YENGİ", "MİRKELAM", "FERDA",
        "ANI", "GÖKSEL", "TEOMAN", "ŞEBNEM", "FERAH", "MUSTAFA", "SANDAL", "KENAN", "DOĞULU", "SERDAR",
        "ORTAÇ", "KAYAHAN", "SEZEN", "AKSU", "NİLÜFER", "ZERRİN", "ÖZER", "HAKAN", "PEKER", "YONCA",
        "EVCİMİK", "BURAK", "KUT", "DENİZ", "SEKİ", "İBRAHİM", "TATLSES", "MAHSUN", "KIRMIZIGÜL", "ÖZCAN",
        "DENİZ", "POP", "ROCK", "RAP", "ARABESK", "FANTAZİ", "KLİP", "ALBÜM", "KASET", "KONSER"
    ],
    "Doğa": [
        "ORMAN", "AĞAÇ", "ÇİÇEK", "BİTKİ", "HAYVAN", "BÖCEK", "KUŞ", "BALIK", "MEMELİ", "SÜRÜNGEN",
        "TOPRAK", "KAYA", "MADEN", "SU", "HAVA", "GÜNEŞ", "AY", "YILDIZ", "BULUT", "YAĞMUR",
        "KAR", "RÜZGAR", "FIRTINA", "ŞİMŞEK", "YILDIRIM", "GÖKKUŞAĞI", "MEVSİM", "İKLİM", "DENİZ", "GÖL",
        "NEHİR", "DAĞ", "TEPE", "VADİ", "MAĞARA", "ADA", "OKYANUS", "KUM", "ÇÖL", "BOZKIR",
        "YAYLA", "DOĞA", "YŞAM", "EKOLOJİ", "ÇEVRE", "KORUMA", "GERİ", "DÖNÜŞÜM", "ENERJİ", "KAYNAK"
    ],
    "Spor": [
        "FUTBOL", "BASKETBOL", "VOLEYBOL", "TENİS", "YÜZME", "KOŞU", "BİSİKLET", "GÜREŞ", "HALTER", "BOKS",
        "KARATE", "JUDO", "OKÇULUK", "ATICILIK", "ESKİRİM", "CİMNASTİK", "ATLETİZM", "YELKEN", "KÜREK", "SÖRF",
        "KAYAK", "BUZ", "PATENİ", "HOKEY", "GOLF", "BİLARDO", "SATRANÇ", "TAVLA", "DAMA", "DOMİNO",
        "TAKIM", "OYUNCU", "ANTRENÖR", "HAKEM", "SAHA", "STAT", "SALON", "KORT", "HAVUZ", "PİST",
        "TOP", "RAKET", "FİLE", "KALE", "POTA", "PUAN", "SKOR", "GOL", "BASKET", "SERVİS"
    ],
    "Uzay": [
        "GÜNEŞ", "MERKÜR", "VENÜS", "DÜNYA", "MARS", "JÜPİTER", "SATÜRN", "URANÜS", "NEPTÜN", "PLÜTON",
        "AY", "YILDIZ", "GEZEGEN", "GALAKSİ", "SAMANYOLU", "ANDROMEDA", "EVREN", "UZAY", "ASTEROİD", "KUYRUKLU",
        "YILDIZ", "METEOR", "GÖKTAŞI", "KARADELİK", "NEBULA", "SİPERNOVA", "TELESKOP", "ROKET", "UYDU", "İSTASYON",
        "ASTRONOT", "KOZMONOT", "YERÇEKİMİ", "YÖRİNGE", "IŞIK", "HIZI", "YILI", "ZAMAN", "BOŞLUK", "MADDE",
        "KARANLIK", "ENERJİ", "ATOM", "HİDROJEN", "HELYUM", "PLAZMA", "RADYASYON", "MANYETİK", "ALAN", "GÖKYÜZÜ"
    ],
    "Sinema": [
        "FİLM", "OYUNCU", "YÖNETMEN", "SENARYO", "KAMERA", "IŞIK", "SES", "KURGU", "SAHNE", "DEKOR",
        "KOSTÜM", "MAKYAJ", "EFEKT", "MÜZİK", "DUBLAJ", "ALTYAZI", "SİNEMA", "SALON", "PERDE", "KOLTUK",
        "BİLET", "MISIR", "FRAGMAN", "AFİŞ", "ÖDÜL", "OSCAR", "FESTİVAL", "TÜRK", "DÜNYA", "HOLLYWOOD",
        "AKSİYON", "KOMEDİ", "DRAM", "KORKU", "GERİLİM", "BİLİM", "KURGU", "ANİMASYON", "BELGESEL", "KISA",
        "UZUN", "METRAJ", "KAMERAMAN", "YAPIMCI", "SENARİST", "OYUNCULUK", "BAŞROL", "YARDIMCI", "FİGÜRAN", "STÜDYO"
    ],
    "Genel": [] // Bu kategori çalışma anında diğerlerinden karışık olarak doldurulacak
};

// Genel kategorisini doldurma (Tüm kategorilerden rastgele kelimeler)
const allWords = Object.values(WORD_DATA).flat().filter(word => word !== "");
WORD_DATA["Genel"] = allWords;

window.WORD_DATA = WORD_DATA;

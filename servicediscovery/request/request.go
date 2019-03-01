package request


type Room struct {
	Gid       int    `json:"gid"`
	Rsize     int    `json:"rsize"`
	Address   string `json:"address"`
	Port      int    `json:"port"`
	Protocol  string `json:"protocol"`
	IsAudio   bool   `json:"isAudio"`
	MinPlayer int    `json:"minPlayer"`
	StopTime  int    `json:"stopTime"`
}


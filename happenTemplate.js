
let library = (function () {

    return {
        Format: (function () {
            return {
                Ordinal: function (num) {
                    let last = num.toString().substring(num.toString().length - 1);
                    if (num == 11 || num == 12 || num == 13) {
                        return num + "th";
                    }
                    switch (last) {
                        case '1':
                            return num + "st";
                        case '2':
                            return num + "nd";
                        case '3':
                            return num + "rd";
                        default:
                            return num + "th";
                    }
                }
            }
        })(),
        TimeStamp: (function () {
            let date = new Date();
            let d = new Date();
            return {
                UnixTimestamp: function () {
                    let d = new Date();
                    let time = d.getTime().toString() / 1000 | 0;
                    return (time.toString())
                },
                UnixMillisecond: function () {
                    let d = new Date();
                    let time = d.getTime().toString();
                    return (time.toString())
                }
            }
        })(),
        Local: (function () {
            return {
                Time: (function () {
                    return {
                        WithSeconds: function () {
                            let d = new Date();
                            let time = d.toLocaleTimeString();
                            return (time.toString());

                        },
                        WithOutSeconds: function () {
                            let d = new Date();
                            let time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                            return (time.toString());
                        }
                    }
                })(),
                MDY: (function () {
                    return {
                        Numeral: function () {
                            let d = new Date();
                            return String(d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear());
                        },
                        Name: function () {
                            let monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                            ];
                            let d = new Date();
                            return String(monthNames[d.getMonth()] + " " + d.getDate() + "," + " " + d.getFullYear());
                        }
                    }
                })(),
            }
        })(),
        Second: (function () {
            return {
                Second: function () {
                    let d = new Date();
                    return String(d.getSeconds());
                },
                DblDigit: function () {
                    let d = new Date();
                    let time = d.getSeconds();
                    return ("0" + d.getSeconds()).slice(-2);
                }
            }
        })(),
        Minute: (function () {
            return {
                Minute: function () {
                    let d = new Date();
                    return String(d.getMinutes());
                },
                DblDigit: function () {
                    let d = new Date();
                    return ("0" + d.getMinutes()).slice(-2);
                }
            }
        })(),
        Hour: (function () {
            return {
                TwentyFourHour: function () {
                    let d = new Date();
                    return String(d.getHours());
                },
                TwelveHour: function () {
                    let d = new Date();
                    let hours = d.getHours();
                    if (hours > 12) {
                        return String(d.getHours() - 12)
                    } else if (hours == 0) {
                        return "12";
                    }
                    else {
                        return String(d.getHours());
                    }

                },
                AMPM: (function () {
                    return {
                        UpperCase: function () {
                            let d = new Date();
                            let hours = d.getHours();
                            if (hours >= 12) {
                                return ("pm").toUpperCase();
                            }
                            else {
                                return ("am").toUpperCase();
                            }
                        },
                        LowerCase: function () {
                            let d = new Date();
                            let hours = d.getHours();
                            if (hours >= 12) {
                                return ("pm").toLowerCase();
                            }
                            else {
                                return ("am").toLowerCase();
                            }
                        }
                    }
                })()
            }
        })(),
        Week: (function () {
            return {
                DayOfWeek: function () {
                    let d = new Date();
                    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    return weekday[d.getDay()];
                },
                AbrDayOfWeek: function () {
                    let d = new Date();
                    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    return weekday[d.getDay()].substring(0, 3);
                },
                FirstTwoOfWeek: function () {
                    let d = new Date();
                    let twoWeekday = ['Su', 'Mo', "Tu", "We", 'Th', "Fr", "Sa"];
                    return twoWeekday[d.getDay()];
                },
                WeekOfYear: function () {
                    let d = new Date();
                    d.setHours(0, 0, 0, 0);
                    d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
                    let week1 = new Date(d.getFullYear(), 0, 4);
                    return String(1 + Math.round(((d.getTime() - week1.getTime()) / 86400000
                        - 3 + (week1.getDay() + 6) % 7) / 7));
                }
            }
        })(),
        Month: (function () {
            return {
                DateOfMonth: (function () {
                    return {
                        Numeral: function () {
                            let d = new Date();
                            return String(d.getDate());
                        },
                        Ordinal: function () {
                            let d = new Date();
                            return library.Format.Ordinal(d.getDate());
                        },
                        DateDblDigit: function () {
                            let d = new Date();
                            return ("0" + d.getDate()).slice(-2);
                        }
                    }
                })(),
                MonthNumber: function () {
                    let d = new Date();
                    return String(d.getMonth() + 1);
                },
                MonthNumberDblDigit: function () {
                    let d = new Date();
                    if (d.getMonth() + 1 < 10) {
                        return ("0" + (d.getMonth() + 1)).slice(-2)
                    }
                    else {
                        return String(d.getMonth()+1);
                    }
                },

                AbrOfCurrentMonth: function () {
                    let d = new Date();
                    let shortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    return shortNames[d.getMonth()];
                },
                CurrentMonth: function () {
                    let d = new Date();
                    let monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];
                    return monthNames[d.getMonth()];
                }
            }
        })(),
        Year: (function () {
            return {
                DayOfYear: (function () {
                    let now = new Date();
                    let start = new Date(now.getFullYear(), 0, 0);
                    let diff = now - start;
                    let oneDay = 1000 * 60 * 60 * 24;
                    let day = Math.floor(diff / oneDay);
                    return {
                        Numeral: function () {
                            return String(day);
                        },
                        Ordinal: function () {
                            return library.Format.Ordinal(String(day))
                        }
                    }
                })(),
                YearFull: function () {
                    let d = new Date();
                    return String(d.getFullYear());
                },
                YearAbr: function () {
                    let d = new Date();
                    return String(d.getFullYear().toString().substr(-2));
                }
            }
        })(),
        Defaults: function () {
            let d = new Date();
            let dbl = function(num){
                if(num < 10){
                    return String('0' + num);
                }
                return String(num);}
            return d.getFullYear() + '-' + dbl(d.getMonth()+1) + '-' + dbl(d.getDate())+"T"+dbl(d.getHours())+":"+dbl(d.getMinutes())+":"+dbl(Math.ceil(d.getSeconds()));
         }
    }
})();
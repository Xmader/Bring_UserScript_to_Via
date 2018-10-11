
var install_txt

function init() {
    if (window && window.via) {
        if(window.via.getInstalledAddonID().indexOf(65535) > -1){
            install_txt = "卸载成功！"
            document.querySelectorAll(".btn")[2].innerText = "卸载"
        }
        else {
            install_txt = "安装成功！"
            document.querySelectorAll(".btn")[2].innerText = "安装"
        }
    }
}

function install() {
    if (window && window.via) {
        window.via.addon("eyJpZCI6IjY1NTM1IiwiYXV0aG9yIjoiWG1hZGVyIiwibmFtZSI6IkJyaW5nIFVzZXJTY3JpcHQgdG8gVmlhIEJyb3dzZXIiLCJpbmZvIjoi5bCGIFVzZXJTY3JpcHQv5rK554y06ISa5pysIOW4puWIsFZpYea1j+iniOWZqCIsInVybCI6IioiLCJjb2RlIjoiQ2lobWRXNWpkR2x2YmlBb0tTQjdDZ3AyWVhJZ2JXRjBZMmhsY3lBOUlDaGJKeW82THk5bmNtVmhjM2xtYjNKckxtOXlaeThxSnl3bktqb3ZMeW92S2k1cWN5ZGRLUzV0WVhBb1puVnVZM1JwYjI0Z0tIZ3BJSHNLSUNBZ0lISmxkSFZ5YmlBaElXeHZZMkYwYVc5dUxtaHlaV1l1YldGMFkyZ29lQzV5WlhCc1lXTmxLQzljS2k5bkxDQWlMaW9pS1NrS2ZTa0tJQ0FnSUNBZ0lDQUthV1lvSVcxaGRHTm9aWE11YVc1amJIVmtaWE1vZEhKMVpTa3BJSEpsZEhWeWJqc0tDZzBLWm5WdVkzUnBiMjRnWVhONWJtTkhaVzVsY21GMGIzSlRkR1Z3S0dFc1lpeGpMR1FzWlN4bUxHY3BlM1J5ZVh0MllYSWdhRDFoVzJaZEtHY3BMR2s5YUM1MllXeDFaWDFqWVhSamFDaGhLWHR5WlhSMWNtNGdkbTlwWkNCaktHRXBmV2d1Wkc5dVpUOWlLR2twT2xCeWIyMXBjMlV1Y21WemIyeDJaU2hwS1M1MGFHVnVLR1FzWlNsOVpuVnVZM1JwYjI0Z1gyRnplVzVqVkc5SFpXNWxjbUYwYjNJb1lTbDdjbVYwZFhKdUlHWjFibU4wYVc5dUtDbDdkbUZ5SUdJOWRHaHBjeXhqUFdGeVozVnRaVzUwY3p0eVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb1puVnVZM1JwYjI0b1pDeGxLWHRtZFc1amRHbHZiaUJtS0dFcGUyRnplVzVqUjJWdVpYSmhkRzl5VTNSbGNDaG9MR1FzWlN4bUxHY3NJbTVsZUhRaUxHRXBmV1oxYm1OMGFXOXVJR2NvWVNsN1lYTjVibU5IWlc1bGNtRjBiM0pUZEdWd0tHZ3NaQ3hsTEdZc1p5d2lkR2h5YjNjaUxHRXBmWFpoY2lCb1BXRXVZWEJ3Ykhrb1lpeGpLVHRtS0hadmFXUWdNQ2w5S1gxOVpuVnVZM1JwYjI0Z2FYTk9ZWFJwZG1WU1pXWnNaV04wUTI5dWMzUnlkV04wS0NsN2FXWW9JblZ1WkdWbWFXNWxaQ0k5UFhSNWNHVnZaaUJTWldac1pXTjBmSHdoVW1WbWJHVmpkQzVqYjI1emRISjFZM1FwY21WMGRYSnVJVEU3YVdZb1VtVm1iR1ZqZEM1amIyNXpkSEoxWTNRdWMyaGhiU2x5WlhSMWNtNGhNVHRwWmlnaVpuVnVZM1JwYjI0aVBUMTBlWEJsYjJZZ1VISnZlSGtwY21WMGRYSnVJVEE3ZEhKNWUzSmxkSFZ5YmlCRVlYUmxMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaeTVqWVd4c0tGSmxabXhsWTNRdVkyOXVjM1J5ZFdOMEtFUmhkR1VzVzEwc1puVnVZM1JwYjI0b0tYdDlLU2tzSVRCOVkyRjBZMmdvWVNsN2NtVjBkWEp1SVRGOWZXWjFibU4wYVc5dUlGOWpiMjV6ZEhKMVkzUW9LWHR5WlhSMWNtNGdYMk52Ym5OMGNuVmpkRDFwYzA1aGRHbDJaVkpsWm14bFkzUkRiMjV6ZEhKMVkzUW9LVDlTWldac1pXTjBMbU52Ym5OMGNuVmpkRHBtZFc1amRHbHZiaWhpTEdNc1pDbDdkbUZ5SUdVOVcyNTFiR3hkTzJVdWNIVnphQzVoY0hCc2VTaGxMR01wTzNaaGNpQmhQVVoxYm1OMGFXOXVMbUpwYm1RdVlYQndiSGtvWWl4bEtTeG1QVzVsZHlCaE8zSmxkSFZ5YmlCa0ppWmZjMlYwVUhKdmRHOTBlWEJsVDJZb1ppeGtMbkJ5YjNSdmRIbHdaU2tzWm4wc1gyTnZibk4wY25WamRDNWhjSEJzZVNodWRXeHNMR0Z5WjNWdFpXNTBjeWw5Wm5WdVkzUnBiMjRnWDNObGRGQnliM1J2ZEhsd1pVOW1LR0VzWWlsN2NtVjBkWEp1SUY5elpYUlFjbTkwYjNSNWNHVlBaajFQWW1wbFkzUXVjMlYwVUhKdmRHOTBlWEJsVDJaOGZHWjFibU4wYVc5dUtHRXNZaWw3Y21WMGRYSnVJR0V1WDE5d2NtOTBiMTlmUFdJc1lYMHNYM05sZEZCeWIzUnZkSGx3WlU5bUtHRXNZaWw5Wm5WdVkzUnBiMjRnWDI5aWFtVmpkRk53Y21WaFpDaGhLWHRtYjNJb2RtRnlJR0k5TVR0aVBHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN1lpc3JLWHQyWVhJZ1l6MXVkV3hzUFQxaGNtZDFiV1Z1ZEhOYllsMC9lMzA2WVhKbmRXMWxiblJ6VzJKZExHUTlUMkpxWldOMExtdGxlWE1vWXlrN0ltWjFibU4wYVc5dUlqMDlkSGx3Wlc5bUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVk41YldKdmJITW1KaWhrUFdRdVkyOXVZMkYwS0U5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVWTjViV0p2YkhNb1l5a3VabWxzZEdWeUtHWjFibU4wYVc5dUtHRXBlM0psZEhWeWJpQlBZbXBsWTNRdVoyVjBUM2R1VUhKdmNHVnlkSGxFWlhOamNtbHdkRzl5S0dNc1lTa3VaVzUxYldWeVlXSnNaWDBwS1Nrc1pDNW1iM0pGWVdOb0tHWjFibU4wYVc5dUtHSXBlMTlrWldacGJtVlFjbTl3WlhKMGVTaGhMR0lzWTF0aVhTbDlLWDF5WlhSMWNtNGdZWDFtZFc1amRHbHZiaUJmWkdWbWFXNWxVSEp2Y0dWeWRIa29ZU3hpTEdNcGUzSmxkSFZ5YmlCaUlHbHVJR0UvVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHRXNZaXg3ZG1Gc2RXVTZZeXhsYm5WdFpYSmhZbXhsT2lFd0xHTnZibVpwWjNWeVlXSnNaVG9oTUN4M2NtbDBZV0pzWlRvaE1IMHBPbUZiWWwwOVl5eGhmV1oxYm1OMGFXOXVJRjkwYjBOdmJuTjFiV0ZpYkdWQmNuSmhlU2hoS1h0eVpYUjFjbTRnWDJGeWNtRjVWMmwwYUc5MWRFaHZiR1Z6S0dFcGZIeGZhWFJsY21GaWJHVlViMEZ5Y21GNUtHRXBmSHhmYm05dVNYUmxjbUZpYkdWVGNISmxZV1FvS1gxbWRXNWpkR2x2YmlCZmJtOXVTWFJsY21GaWJHVlRjSEpsWVdRb0tYdDBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ0pKYm5aaGJHbGtJR0YwZEdWdGNIUWdkRzhnYzNCeVpXRmtJRzV2YmkxcGRHVnlZV0pzWlNCcGJuTjBZVzVqWlNJcGZXWjFibU4wYVc5dUlGOXBkR1Z5WVdKc1pWUnZRWEp5WVhrb1lTbDdhV1lvVTNsdFltOXNMbWwwWlhKaGRHOXlJR2x1SUU5aWFtVmpkQ2hoS1h4OElsdHZZbXBsWTNRZ1FYSm5kVzFsYm5SelhTSTlQVDFQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5MbU5oYkd3b1lTa3BjbVYwZFhKdUlFRnljbUY1TG1aeWIyMG9ZU2w5Wm5WdVkzUnBiMjRnWDJGeWNtRjVWMmwwYUc5MWRFaHZiR1Z6S0dFcGUybG1LRUZ5Y21GNUxtbHpRWEp5WVhrb1lTa3BlMlp2Y2loMllYSWdZajB3TEdNOVFYSnlZWGtvWVM1c1pXNW5kR2dwTzJJOFlTNXNaVzVuZEdnN1lpc3JLV05iWWwwOVlWdGlYVHR5WlhSMWNtNGdZMzE5Wm5WdVkzUnBiMjRnWDJOc1lYTnpRMkZzYkVOb1pXTnJLR0VzWWlsN2FXWW9JU2hoSUdsdWMzUmhibU5sYjJZZ1lpa3BkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWdpUTJGdWJtOTBJR05oYkd3Z1lTQmpiR0Z6Y3lCaGN5QmhJR1oxYm1OMGFXOXVJaWw5Wm5WdVkzUnBiMjRnWDJSbFptbHVaVkJ5YjNCbGNuUnBaWE1vWVN4aUtYdG1iM0lvZG1GeUlHTXNaRDB3TzJROFlpNXNaVzVuZEdnN1pDc3JLV005WWx0a1hTeGpMbVZ1ZFcxbGNtRmliR1U5WXk1bGJuVnRaWEpoWW14bGZId2hNU3hqTG1OdmJtWnBaM1Z5WVdKc1pUMGhNQ3dpZG1Gc2RXVWlhVzRnWXlZbUtHTXVkM0pwZEdGaWJHVTlJVEFwTEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGhMR011YTJWNUxHTXBmV1oxYm1OMGFXOXVJRjlqY21WaGRHVkRiR0Z6Y3loaExHSXNZeWw3Y21WMGRYSnVJR0ltSmw5a1pXWnBibVZRY205d1pYSjBhV1Z6S0dFdWNISnZkRzkwZVhCbExHSXBMR01tSmw5a1pXWnBibVZRY205d1pYSjBhV1Z6S0dFc1l5a3NZWDBvWm5WdVkzUnBiMjRvS1hzaWRYTmxJSE4wY21samRDSTdkbUZ5SUdFOVpuVnVZM1JwYjI0b0tYdG1kVzVqZEdsdmJpQmhLQ2w3WDJOc1lYTnpRMkZzYkVOb1pXTnJLSFJvYVhNc1lTbDljbVYwZFhKdUlGOWpjbVZoZEdWRGJHRnpjeWhoTEZ0N2EyVjVPaUpsYm1OdlpHVWlMSFpoYkhWbE9tWjFibU4wYVc5dUlHTW9ZaWw3Y21WMGRYSnVJR0V1ZEc5Q1lYTmxOalFvWWlsOWZTeDdhMlY1T2lKa1pXTnZaR1VpTEhaaGJIVmxPbVoxYm1OMGFXOXVJR01vWWlsN2NtVjBkWEp1SUdFdVpuSnZiVUpoYzJVMk5DaGlLWDE5WFN4YmUydGxlVG9pZEc5Q1lYTmxOalFpTEhaaGJIVmxPbVoxYm1OMGFXOXVLR0VwZTNKbGRIVnliaUoxYm1SbFptbHVaV1FpUFQxMGVYQmxiMllnUW5WbVptVnlQMkowYjJFb1pXNWpiMlJsVlZKSlEyOXRjRzl1Wlc1MEtHRXBMbkpsY0d4aFkyVW9MeVVvV3pBdE9VRXRSbDE3TW4wcEwyY3NablZ1WTNScGIyNG9ZU3hpS1h0MllYSWdZejFUZEhKcGJtY3Vabkp2YlVOb1lYSkRiMlJsTzNKbGRIVnliaUJqS0NJd2VDSXJZaWw5S1NrNlFuVm1abVZ5TG1aeWIyMG9ZU2t1ZEc5VGRISnBibWNvSW1KaGMyVTJOQ0lwZlgwc2UydGxlVG9pWm5KdmJVSmhjMlUyTkNJc2RtRnNkV1U2Wm5WdVkzUnBiMjRnWWloaEtYdHlaWFIxY200aWRXNWtaV1pwYm1Wa0lqMDlkSGx3Wlc5bUlFSjFabVpsY2o5a1pXTnZaR1ZWVWtsRGIyMXdiMjVsYm5Rb1lYUnZZaWhoS1M1emNHeHBkQ2dpSWlrdWJXRndLR1oxYm1OMGFXOXVLR0VwZTNKbGRIVnliaUlsSWlzb0lqQXdJaXRoTG1Ob1lYSkRiMlJsUVhRb01Da3VkRzlUZEhKcGJtY29NVFlwS1M1emJHbGpaU2d0TWlsOUtTNXFiMmx1S0NJaUtTazZRblZtWm1WeUxtWnliMjBvWVN3aVltRnpaVFkwSWlrdWRHOVRkSEpwYm1jb0tYMTlYU2tzWVgwb0tTeGlQV0V1ZEc5Q1lYTmxOalFzWXoxbWRXNWpkR2x2YmlncGUybG1LQ0oxYm1SbFptbHVaV1FpSVQxMGVYQmxiMllnYkc5allYUnBiMjRwZTNaaGNpQmhQV3h2WTJGMGFXOXVMbWh5WldZdWJXRjBZMmdvTDJkeVpXRnplV1p2Y210Y0xtOXlaMXd2TGlwelkzSnBjSFJ6WEM4b1hHUXJLUzhwTzNKbGRIVnliaUJoSmlaaFd6RmRmWDBzWkQxbWRXNWpkR2x2YmlncGUyWjFibU4wYVc5dUlHRW9aQ2w3ZG1GeUlHVTlNVHhoY21kMWJXVnVkSE11YkdWdVozUm9KaVoyYjJsa0lEQWhQVDFoY21kMWJXVnVkSE5iTVYwL1lYSm5kVzFsYm5Seld6RmRPbU1vS1h4OElpSXVZMjl1WTJGMEtHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BLVHRmWTJ4aGMzTkRZV3hzUTJobFkyc29kR2hwY3l4aEtTeDBhR2x6TG1obFlXUmxjajFrTG5Od2JHbDBLQ0k5UFZWelpYSlRZM0pwY0hROVBTSXBXekZkTG5Od2JHbDBLQ0lLZlNrb0tUc0tJQ0FnSUNBZ0lDQT0ifQ==")
        swal(install_txt, "", "success")
        init()
    } else {
        swal("安装失败！", "需要使用Via浏览器", "error")
    }
}

init()
